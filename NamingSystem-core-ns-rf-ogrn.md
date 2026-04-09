# core-ns-rf-ogrn - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-rf-ogrn**

## NamingSystem: core-ns-rf-ogrn 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-rf-ogrn | *Version*:1 |
| Active as of 2024-01-01 | *Computable Name*:Core_Ns_Rf_OGRN |

 
Основной государственный регистрационный номер юридического лица (индивидуального предпринимателя) (ОГРН) 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-rf-ogrn",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-rf-ogrn"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "Core_Ns_Rf_OGRN",
  "status" : "active",
  "kind" : "identifier",
  "date" : "2024-01-01",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Основной государственный регистрационный номер юридического лица (индивидуального предпринимателя) (ОГРН)",
  "uniqueId" : [{
    "type" : "uri",
    "value" : "http://fhir.ru/core/systems/ogrn",
    "preferred" : true
  }]
}

```
