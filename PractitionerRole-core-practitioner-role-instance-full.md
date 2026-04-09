# core-practitioner-role-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-practitioner-role-instance-full**

## Example PractitionerRole: core-practitioner-role-instance-full

Profile: [Core PractitionerRole (Роль/должность сотрудника)](StructureDefinition-core-practitioner-role.md)

**practitioner**: [Practitioner Мария Ивановна Иванова (official)](Practitioner-core-practitioner-instance-full.md)

**organization**: [Organization САНКТ-ПЕТЕРБУРГСКОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ 'ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА № 1 ИМ. П.П.КАЩЕНКО'](Organization-core-organization-instance-full.md)

**code**: врач-акушер-гинеколог



## Resource Content

```json
{
  "resourceType" : "PractitionerRole",
  "id" : "core-practitioner-role-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-practitioner-role"]
  },
  "practitioner" : {
    "reference" : "Practitioner/core-practitioner-instance-full"
  },
  "organization" : {
    "reference" : "Organization/core-organization-instance-full"
  },
  "code" : [{
    "coding" : [{
      "system" : "http://fhir.ru/core/systems/medical-workers-positions",
      "code" : "13",
      "display" : "врач-акушер-гинеколог"
    }]
  }]
}

```
