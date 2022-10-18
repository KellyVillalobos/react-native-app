import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput, Menu } from 'react-native-paper';

interface Props {
    value: string
    options: Array<Option>
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    field: string
    label: string

}

type Option = {
    label: string,
    value: string
}

export const Dropdown = ({value, options, setFieldValue, field, label}: Props) => {
    const [showDropDown, setShowDropdown] = React.useState(false);
    const capatalize = ():string => {
        return value.charAt(0).toUpperCase()+value.slice(1)
    }
    const setOutlineColor = (field: string, fieldErrors?: string | undefined): string | undefined => {
        return field.length > 0 && !fieldErrors ? '#07db51' : undefined
      }
      
      const setCheckIcon = (field: string, fieldErrors?: string | undefined): ReactElement<any> | undefined => {
        return field.length === 0 || fieldErrors ? undefined : <TextInput.Icon color={() => '#07db51'} icon='check-circle'/>
      }
    return (
        <Menu
          style={{width: '92%'}}
          visible={showDropDown}
          onDismiss={() => setShowDropdown(false)}
          anchor={ 
          <TouchableOpacity activeOpacity={100} onPress={() => setShowDropdown(true)}>
            <TextInput
              mode='outlined'
              label={label}
              pointerEvents="none"
              value={capatalize()}
              outlineColor={setOutlineColor(value)}
              right={setCheckIcon(value)}
              caretHidden={true}
            />
          </TouchableOpacity>
          }
          >
            {options.map((option, index)=> {
              return (
              <Menu.Item style={{width: '100%'}} onPress={() => {
                setFieldValue(field, option.value, false)
                setShowDropdown(false)
              }} key={`${option.value}-option-${index}`} title={option.label}/>
              )
            })}
        </Menu>
    )
}
