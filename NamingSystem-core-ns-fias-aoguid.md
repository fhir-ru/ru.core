# core-ns-fias-aoguid - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-fias-aoguid**

## NamingSystem: core-ns-fias-aoguid 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-fias-aoguid | *Version*:1 |
| Active as of 2023-10-23 | *Computable Name*:Core_Ns_Fias_Aoguid |

 
Идентификатор адресного объекта по справочнику ФИАС 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-fias-aoguid",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-fias-aoguid"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "Core_Ns_Fias_Aoguid",
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
  "description" : "Идентификатор адресного объекта по справочнику ФИАС",
  "uniqueId" : [{
    "type" : "uri",
    "value" : "urn:hl7-ru:fias:aoguid",
    "preferred" : true
  }]
}

```
