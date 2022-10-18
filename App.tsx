import React, { ReactElement } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { TextInput, Menu, HelperText, Button, MD3DarkTheme, DefaultTheme, Provider as PaperProvider, Switch, Surface, MD3Colors, List } from 'react-native-paper';
// import {setOutlineColor, setCheckIcon} from './componentHelpers/fieldHelpers'
import { Dropdown } from './components/Dropdown';
import { styles } from './styles/signinStyles';
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

const setOutlineColor = (field: string, fieldErrors?: string | undefined): string | undefined => {
  return field.length > 0 && !fieldErrors ? '#07db51' : undefined
}

const setCheckIcon = (field: string, fieldErrors?: string | undefined): ReactElement<any> | undefined => {
  return field.length === 0 || fieldErrors ? undefined : <TextInput.Icon color={() => '#07db51'} icon='check-circle'/>
}

const formValues = {
firstName: '',
lastName: '',
email: '',
gender: ''
}

const genderValues = [
  {label: 'Male' ,value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'}
]

const darkTheme = {
  ...MD3DarkTheme,
  roundness: 3,
  version: 3,
  colors: {
    ...MD3DarkTheme.colors,  
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
       {({values, touched, handleChange, handleBlur, errors, resetForm, setFieldValue}) => (
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

          <Dropdown label={'Gender'} value={values.gender} options={genderValues} setFieldValue={setFieldValue} field={'gender'}/>

          <Button mode='contained' style={styles.buttonStyle} onPress={() => resetForm()}>Reset Form</Button>

          <View style={[styles.alignRow, {marginTop: 30}]}> 
          <Switch color={MD3Colors.primary80} value={isSwitchOn} onValueChange={onToggleSwitch}/>
          <List.Icon color={isSwitchOn ? MD3Colors.primary80 : MD3Colors.primary40} icon={isSwitchOn ? "brightness-4" : "brightness-6"}/>
          </View>

        </ScrollView>
        </Surface>
        </PaperProvider>       
       )}
      </Formik>
  );
}
