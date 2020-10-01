import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import Custom from '../../Custom'
import Certificates from '../../Certificates'
import Header from '../../Header'
import Skills from '../../Skills';
import Links from '../../Links'
import Details from '../../Details'
import Languages from '../../Languages'
import Hobbies from '../../Hobbies';
import GDPA from '../../GDPA';
import MainContext from '../../../../CreateCVApp';
import { Provider } from 'react-redux'
import store from '../../../../redux/store'
import Spacer from '../../Spacer';
import {styles} from './styles'
import {headerStyles} from './headerStyles'
import {detailsStyles} from './detailsStyles'




export default class Upeksa extends React.Component {
  render() {
    return (
      <Provider store={store} context={MainContext}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.header} fixed></View>
            <Header context={MainContext} style={headerStyles}></Header>
            <Spacer size='15'></Spacer>
            <View style={styles.contents}>
              <View style={styles.leftColumn}>
                <Details context={MainContext} style={detailsStyles} />
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

