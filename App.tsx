import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TextInput, HelperText, Button, MD3DarkTheme, DefaultTheme, Provider as PaperProvider, Switch, Surface } from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(2, 'Too Short')
.max(50, 'Too Long')
.required('First Name is required!'),
lastName: Yup.string()
.min(3, 'Too Short!')
.max(50, 'Too Long!')
.required('Last Name is required!'),
email: Yup.string().email('Invalid Email')}
)

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 40,
  },
  flexRow: {
    flexDirection:'column'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    top: 20,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    alignSelf:'center', 
    marginTop: 60
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  },
  errorInput: {
    marginTop: 16,
    marginRight: 16,
    marginBottom: 0,
    marginLeft: 16,
    border: '2px solid red !important'
  },
  textInput: {
    marginTop: 16,
    marginRight: 16,
    marginBottom: 0,
    marginLeft: 16
  },
  surface: {
    height:1000
  }
})

const setOutlineColor = (field: string, fieldErrors: string | undefined): string | undefined => {
  return field.length > 0 && !fieldErrors ? '#07db51' : undefined
}

const setCheckIcon = (field: string, fieldErrors: string | undefined): ReactElement<any> | undefined => {
  return field.length === 0 || fieldErrors ? undefined : <TextInput.Icon color={() => '#07db51'} icon='check-circle'/>
}

const formValues = {
firstName: '',
lastName: '',
email: ''
}

const darkTheme = {
  ...MD3DarkTheme,
  roundness: 3,
  version: 3,
  colors: {
    ...MD3DarkTheme.colors,
    // primary: '#3498db',
    // accent: '#f1c40f',
   
  }
}

export default function App() {
  const [theme, setTheme] = React.useState<object>(DefaultTheme);
  const [isSwitchOn, setIsSwitchOn] = React.useState<boolean>(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if(theme === DefaultTheme){
      setTheme(darkTheme);
    }else{
      setTheme(DefaultTheme)
    }
  }
  return (
      <Formik
      initialValues={formValues}
      validationSchema={formSchema}
      onSubmit={()=>{}}
      validateOnChange={true}
      validateOnBlur={false}
      validateOnMount={false}
      >
       {({values, touched, handleChange, handleBlur, errors, resetForm}) => (
        <PaperProvider theme={theme}>
          <Surface style={styles.surface} elevation={1}>
        <ScrollView style={styles.container}>
          <TextInput
            error={touched.firstName && Boolean(errors.firstName)}
            mode='outlined'
            label='First Name*' 
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            outlineColor={setOutlineColor(values.firstName, errors.firstName)}
            activeOutlineColor={setOutlineColor(values.firstName, errors.firstName)}
            right={setCheckIcon(values.firstName, errors.firstName)}
          />
          <HelperText type='error'>{touched.firstName && errors.firstName}</HelperText>
          <TextInput
            error={touched.lastName && Boolean(errors.lastName)}
            mode='outlined'
            label='Last Name*' 
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            outlineColor={setOutlineColor(values.lastName, errors.lastName)}
            activeOutlineColor={setOutlineColor(values.lastName, errors.lastName)}
            right={setCheckIcon(values.lastName, errors.lastName)}
          />
          <HelperText type='error'>{touched.lastName && errors.lastName}</HelperText>
          <TextInput
            error={touched.email && Boolean(errors.email)}
            mode='outlined'
            label='Email' 
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            outlineColor={setOutlineColor(values.email, errors.email)}
            activeOutlineColor={setOutlineColor(values.email, errors.email)}
            right={setCheckIcon(values.email, errors.email)}
          />
          <HelperText type='error'>{touched.email && errors.email}</HelperText>
          <Button mode='contained' style={{borderRadius: 5}} onPress={() => resetForm()}>Reset Form</Button>
          <Switch style={{marginTop: 16}} value={isSwitchOn} onValueChange={onToggleSwitch}/>          
        </ScrollView>
        </Surface>
        </PaperProvider>       
       )}
      </Formik>
  );
}
