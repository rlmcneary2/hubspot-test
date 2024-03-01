import {
  FieldGroup,
  ModuleFields,
  TextField,
} from "@hubspot/cms-components/fields"

function NameField() {
  return (
    <FieldGroup label="Person" name="person_info">
      <TextField
        default="Please enter your name."
        label="Name"
        name="person_name"
        required
      ></TextField>
    </FieldGroup>
  )
}

export const fields = (
  <ModuleFields>
    <NameField />
  </ModuleFields>
)

console.log(NameField())
