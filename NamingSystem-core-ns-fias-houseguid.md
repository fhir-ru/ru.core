# core-ns-fias-houseguid - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-fias-houseguid**

## NamingSystem: core-ns-fias-houseguid 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-fias-houseguid | *Version*:1 |
| Active as of 2023-10-23 | *Computable Name*:Core_Ns_Fias_Houseguid |

 
Идентификатор дома по справочнику ФИАС 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-fias-houseguid",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-fias-houseguid"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "Core_Ns_Fias_Houseguid",
  "status" : "active",
  "kind" : "identifier",
  "date" : "2023-10-23",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Идентификатор дома по справочнику ФИАС",
  "uniqueId" : [{
    "type" : "uri",
    "value" : "urn:hl7-ru:fias:houseguid",
    "preferred" : true
  }]
}

```
