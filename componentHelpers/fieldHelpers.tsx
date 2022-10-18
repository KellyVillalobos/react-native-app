import { ReactElement } from "react"
import { TextInput } from "react-native-paper"

export const setOutlineColor = (field: string, fieldErrors?: string | undefined): string | undefined => {
    return field.length > 0 && !fieldErrors ? '#07db51' : undefined
  }
  
  export const setCheckIcon = (field: string, fieldErrors?: string | undefined): ReactElement<any> | undefined => {
    return field.length === 0 || fieldErrors ? undefined : <TextInput.Icon color={() => '#07db51'} icon='check-circle'/>
  }