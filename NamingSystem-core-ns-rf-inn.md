# core-ns-rf-inn - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-rf-inn**

## NamingSystem: core-ns-rf-inn 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-rf-inn | *Version*:1 |
| Active as of 2023-12-01 | *Computable Name*:Core_Ns_Rf_INN |

 
Государственные идентификационные номера налогоплательщика, формируются государственной федеральной налоговой службой (ФНС России). Уникальный неизменяемый.. Используется на всей территории РФ и не меняется, даже если налогоплательщик меняет место жительства, фамилию и другие паспортные данные. 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-rf-inn",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-rf-inn"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "Core_Ns_Rf_INN",
  "status" : "active",
  "kind" : "identifier",
  "date" : "2023-12-01",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Государственные идентификационные номера налогоплательщика, формируются государственной федеральной налоговой службой (ФНС России). Уникальный неизменяемый.. Используется на всей территории РФ и не меняется, даже если налогоплательщик меняет место жительства, фамилию и другие паспортные данные.",
  "uniqueId" : [{
    "type" : "uri",
    "value" : "http://fhir.ru/core/systems/inn",
    "preferred" : true
  }]
}

```
