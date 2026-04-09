# Core Service Request (Заказ услуги) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Service Request (Заказ услуги)**

## Resource Profile: Core Service Request (Заказ услуги) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-servicerequest | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_ServiceRequest |

 
Заказ услуги 

Профиль Core Service Request ресурса Service Request не содержит уточнений, связанных с заказом медицинских услуг в РФ. Предполагается, что ограничения и расширения будут вноситься в наследованных профилях. Согласно общему правилу, атрибуты типа Reference должны указывать на профили ресурсов Ru Core, при наличии. Здесь это атрибут subject в части указания на ресурс Patient.

//в профиле следует ослабить ограничение * subject only Reference(Core_Patient)

**Usages:**

* Examples for this Profile: [ServiceRequest/core-servicerequest-instance-full](ServiceRequest-core-servicerequest-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-servicerequest)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-servicerequest.csv), [Excel](StructureDefinition-core-servicerequest.xlsx), [Schematron](StructureDefinition-core-servicerequest.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-servicerequest",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-servicerequest",
  "version" : "1",
  "name" : "Core_ServiceRequest",
  "title" : "Core Service Request (Заказ услуги)",
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
  "description" : "Заказ услуги",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
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
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ServiceRequest",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ServiceRequest",
      "path" : "ServiceRequest"
    },
    {
      "id" : "ServiceRequest.subject",
      "path" : "ServiceRequest.subject",
      "short" : "Пациент",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-patient"]
      }]
    }]
  }
}

```
