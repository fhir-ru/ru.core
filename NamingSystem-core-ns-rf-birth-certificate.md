# core-ns-rf-birth-certificate - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-rf-birth-certificate**

## NamingSystem: core-ns-rf-birth-certificate 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-rf-birth-certificate | *Version*:1 |
| Active as of 2023-11-22 | *Computable Name*:Core_Ns_Rf_Birth_Certificate |

 
Номера государственных свидетельств о рождении формируются государственной системой органов записи актов гражданского состояния (ЗАГС), с внесением в единый реестр записей актов гражданского состояния (ЕГР ЗАГС). Предполагается, что номер уникален, сведений об ограничении срока уникальности номера нет. 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-rf-birth-certificate",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-rf-birth-certificate"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "Core_Ns_Rf_Birth_Certificate",
  "status" : "active",
  "kind" : "identifier",
  "date" : "2023-11-22",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Номера государственных свидетельств о рождении формируются государственной системой органов записи актов гражданского состояния (ЗАГС), с внесением в единый реестр записей актов гражданского состояния (ЕГР ЗАГС). Предполагается, что номер уникален, сведений об ограничении срока уникальности номера нет.",
  "uniqueId" : [{
    "type" : "uri",
    "value" : "http://fhir.ru/core/systems/birth-certificate",
    "preferred" : true
  }]
}

```
