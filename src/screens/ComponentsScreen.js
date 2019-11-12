/*import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = "Jordan";
  return (
    <View>
      <Text style={styles.headerTextStyle}>Care Map</Text>
      <Text style={styles.subHeaderTextStyle}>This is the Care Map components screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 45
  },
  subHeaderTextStyle: {
    fontSize: 20
  }
});

SELECTION LIST::
          <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select:</Text>

            {SELECTORS.map(selector => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> 
  END       

export default ComponentsScreen;
*/

import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const DayCareCenters = 
'Families choose child care centers for different reasons: Child care centers have a classroom-like environment where children are cared for in groups of other children typically their same age. There are more adults present in the building. There are a variety of activities and opportunities for children. They often have the most regulations and inspections for health and safety standards. ';
const Preschool = 
  'Preschool programs are typically offered for children ages 3-5 years old and may be offered through a school, faith-based organizations, non-profit organizations, and child care centers. Families choosing this type of care may not need a full-time program but may be looking for a program that focuses on school readiness. While some preschool programs may operate on a full-day, year round schedule, some may not.';
const SchoolAgePrograms = 
  'School-age programs typically provide child care during the before- and after-school hours. They may also offer care during school holidays and summer break. Often schools, non-profits, local businesses, or local government will host summer ‘camps’ that are focused on a particular interest (e.g. sports, arts, nature, science) that can provide part-time or full-day care for school age children during the summer break. ';
const Montessori = 
  'Montessori is a method of education that is based on self-directed activity, hands-on learning and collaborative play. In Montessori classrooms children make creative choices in their learning, while the classroom and the highly trained teacher offer age-appropriate activities to guide the process. The majority of Montessori schools end at age 4 or 5 since the majority of Montessori schools are pre-schools. But most of the others stop at either 9 or 12. Montessori philosophy states that as children mature, so does their brain.';
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
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Text style={styles.title}>Types of Care</Text>

          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
            <Switch
              value={multipleSelect}
              onValueChange={a => this.setState({ multipleSelect: a })}
            />
          </View>
         
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
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
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
