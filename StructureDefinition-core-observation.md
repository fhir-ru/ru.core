# Core Observation (Измерения и простые утверждения о пациенте) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Observation (Измерения и простые утверждения о пациенте)**

## Resource Profile: Core Observation (Измерения и простые утверждения о пациенте) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-observation | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Observation |

 
Измерения и простые утверждения о пациенте, устройстве или других объектах 

Профиль не содержит уточнений, связанных с регистрацией измерений или наблюдений в РФ. Предполагается, что ограничения и расширения будут вноситься в наследованных профилях. Согласно общему правилу, атрибуты типа Reference должны указывать на профили ресурсов Ru Core, при наличии. Здесь это атрибуты subject, encounter, performer.

**Usages:**

* Examples for this Profile: [Observation/core-observation-instance-full](Observation-core-observation-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-observation)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-observation.csv), [Excel](StructureDefinition-core-observation.xlsx), [Schematron](StructureDefinition-core-observation.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-observation",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-observation",
  "version" : "1",
  "name" : "Core_Observation",
  "title" : "Core Observation (Измерения и простые утверждения о пациенте)",
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
  "description" : " Измерения и простые утверждения о пациенте, устройстве или других объектах",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "sct-concept",
    "uri" : "http://snomed.info/conceptdomain",
    "name" : "SNOMED CT Concept Domain Binding"
  },
  {
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
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "sct-attr",
    "uri" : "http://snomed.org/attributebinding",
    "name" : "SNOMED CT Attribute Binding"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Observation",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Observation",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Observation",
      "path" : "Observation"
    },
    {
      "id" : "Observation.subject",
      "path" : "Observation.subject",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-patient"]
      }]
    },
    {
      "id" : "Observation.encounter",
      "path" : "Observation.encounter",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-encounter"]
      }]
    },
    {
      "id" : "Observation.performer",
      "path" : "Observation.performer",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-practitioner",
        "https://fhir.ru/ig/core/StructureDefinition/core-practitioner-role"]
      }]
    }]
  }
}

```
