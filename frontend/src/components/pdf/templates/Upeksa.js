import React from 'react';
import { Document, Page, View, StyleSheet, Font, Text } from '@react-pdf/renderer';
import Custom from '../Custom'
import Certificates from '../Certificates'
import Header from '../Header'
import Skills from '../Skills';
import Links from '../Links'
import Details from '../Details'
import Languages from '../Languages'
import Hobbies from '../Hobbies';
import GDPA from '../GDPA';
import MainContext from '../../../CreateCVApp';
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import Spacer from '../Spacer';
import { BottomCorner } from 'grommet-icons';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});
const marginVertical = '20mm'
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    // fontFamily : "Roboto",
    paddingBottom: marginVertical,
    height: '100%',
    objectFit: '100%'
  },
  contents: {
    paddingHorizontal: '25mm',
    flexDirection: 'row',
    fontSize: 8
  },
  leftColumn: {
    width: '60mm',
    backgroundColor: 'red'
  },
  middleColumnLeft: {
    borderRight: '1 solid black',
    width: '5mm',
  },
  middleColumnRight: {
    width: '5mm',
  },
  rightColumn: {
    width: '100mm',
  },
  header: {
    backgroundColor: 'blue',
    height: marginVertical,
  },
  footer: {
    height: marginVertical,
    backgroundColor: 'yellow',
    position: 'absolute',
    bottom: -1,
    width: '100%',
  },
  footerColumn: {
    height: '100%',
    marginBottom: marginVertical,
    borderRight: '1 solid black',
    width: '90mm',
    position: 'relative',
    top: -1
  }
});

export default class Upeksa extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store} context={MainContext}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.header} fixed></View>
            <Header context={MainContext} ></Header>
            <Spacer margin='15'></Spacer>
            <View style={styles.contents}>
              <View style={styles.leftColumn}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. 
                  </Text>
              </View>

              <View style={styles.middleColumnLeft}></View>
              <View style={styles.middleColumnRight}></View>

              <View style={styles.rightColumn}>
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum.
              </Text>
              </View>
              
            </View>
            <View>
            <View style={styles.footerColumn}>
              <Text> </Text>
            </View>
            </View>
            <View style={styles.footer} fixed>
              <Text> </Text>
            </View>
          </Page>
        </Document>
      </Provider>
    )
  }
}

