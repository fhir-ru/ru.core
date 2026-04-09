# Core PractitionerRole (Роль/должность сотрудника) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core PractitionerRole (Роль/должность сотрудника)**

## Resource Profile: Core PractitionerRole (Роль/должность сотрудника) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-practitioner-role | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Practitioner_Role |

 
Роль (должность) врача, медицинского работника, специалиста 

**Usages:**

* Refer to this Profile: [Core Observation (Измерения и простые утверждения о пациенте)](StructureDefinition-core-observation.md)
* Examples for this Profile: [PractitionerRole/core-practitioner-role-instance-full](PractitionerRole-core-practitioner-role-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-practitioner-role)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-practitioner-role.csv), [Excel](StructureDefinition-core-practitioner-role.xlsx), [Schematron](StructureDefinition-core-practitioner-role.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-practitioner-role",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-practitioner-role",
  "version" : "1",
  "name" : "Core_Practitioner_Role",
  "title" : "Core PractitionerRole (Роль/должность сотрудника)",
  "status" : "active",
  "date" : "2026-04-09T17:27:53+00:00",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : " Роль (должность) врача, медицинского работника, специалиста",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "PractitionerRole",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "PractitionerRole",
      "path" : "PractitionerRole"
    },
    {
      "id" : "PractitionerRole.practitioner",
      "path" : "PractitionerRole.practitioner",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-practitioner"]
      }]
    },
    {
      "id" : "PractitionerRole.organization",
      "path" : "PractitionerRole.organization",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-organization"]
      }]
    },
    {
      "id" : "PractitionerRole.code",
      "path" : "PractitionerRole.code",
      "binding" : {
        "strength" : "example",
        "valueSet" : "http://terminology.hl7.org/ValueSet/v2-0360"
      }
    },
    {
      "id" : "PractitionerRole.code.coding.system",
      "path" : "PractitionerRole.code.coding.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/medical-workers-positions"
    }]
  }
}

```
