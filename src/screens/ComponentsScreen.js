import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import ChildcareImageDetail from "../components/ChildcareImageDetail";

const DayCareCenters = 
  'Families choose child care centers for different reasons:' + 
  '\n\nChild care centers have a classroom-like environment where children are cared for in groups of other children typically their same age. ' + 
  '\n\nThere are more adults present in the building and there are a variety of activities and opportunities for children.'+
  '\n\nOften have the most regulations and inspections for health and safety standards. ';
const Preschool = 
  'Preschool programs are typically offered for children ages 3-5 years old and may be offered through a school, faith-based organizations, non-profit organizations, and child care centers.'+
  '\n\nFamilies choosing this type of care may not need a full-time program but may be looking for a program that focuses on school readiness. '+
  '\n\nWhile some preschool programs may operate on a full-day, year round schedule, some may not.';
const SchoolAgePrograms = 
  'School-age programs typically provide child care during the before- and after-school hours.'+
  '\n\nThey may also offer care during school holidays and summer break. '+
  '\n\nOften schools, non-profits, local businesses, or local government will host summer ‘camps’ that are focused on a particular interest (e.g. sports, arts, nature, science) that can provide part-time or full-day care for school age children during the summer break. ';
const Montessori = 
  'Montessori is a method of education that is based on self-directed activity, hands-on learning and collaborative play.'+
  '\n\nIn Montessori classrooms children make creative choices in their learning, while the classroom and the highly trained teacher offer age-appropriate activities to guide the process. '+
  '\n\nThe majority of Montessori schools end at age 4 or 5 since the majority of Montessori schools are pre-schools. But most of the others stop at either 9 or 12. '+
  '\n\nMontessori philosophy states that as children mature, so does their brain.';
const CONTENT = [
  {
    title: 'Day Care',
    content: DayCareCenters,
  },
  {
    title: 'Preschool Programs',
    content: Preschool,
  },
  {
    title: 'School-Age Programs',
    content: SchoolAgePrograms,
  },
  {
    title: 'Montessori Schools',
    content: Montessori,
  },
];


export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      
      <View style={styles.container}>
        <ImageBackground style = {styles.bgImag} source = {require("../../assets/ele.jpg")}> 
        <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
          <Text style={styles.title}>Types of Child Care</Text>
          
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
           <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Additional Resources</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Financial, ect. 'under construction'
              </Text>
            </View>
          </Collapsible>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bgImag: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 20,
    marginTop: 5,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    fontWeight: '900',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
  content: {
    padding: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    fontWeight: '900',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '900',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontWeight: '900',
    fontSize: 16,
    marginRight: 8,
  },
});
