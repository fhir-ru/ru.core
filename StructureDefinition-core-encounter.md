#  Core Encounter (Случай обслуживания) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* ** Core Encounter (Случай обслуживания)**

## Resource Profile: Core Encounter (Случай обслуживания) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-encounter | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Encounter |

 
Cлучай оказания медицинской помощи, то есть взаимодействия между пациентом и системой здравоохранения с целью оказания медицинских услуг или оценки состояния здоровья пациентах 

Профиль не содержит уточнений, связанных с организацией случаев медицинского обслуживания в РФ. Предполагается, что ограничения и расширения будут вноситься в наследованных профилях. Согласно общему правилу, атрибуты типа Reference должны указывать на профили ресурсов Ru Core, при наличии. Здесь это атрибут subject.

**Usages:**

* Refer to this Profile: [Core Observation (Измерения и простые утверждения о пациенте)](StructureDefinition-core-observation.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-encounter)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-encounter.csv), [Excel](StructureDefinition-core-encounter.xlsx), [Schematron](StructureDefinition-core-encounter.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-encounter",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-encounter",
  "version" : "1",
  "name" : "Core_Encounter",
  "title" : " Core Encounter (Случай обслуживания)",
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
  "description" : "Cлучай оказания медицинской помощи, то есть взаимодействия между пациентом и системой здравоохранения с целью оказания медицинских услуг или оценки состояния здоровья пациентах",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Encounter",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Encounter",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Encounter",
      "path" : "Encounter"
    }]
  }
}

```
