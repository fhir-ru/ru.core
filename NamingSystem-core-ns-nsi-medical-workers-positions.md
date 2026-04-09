# core-ns-nsi-medical-workers-positions - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-nsi-medical-workers-positions**

## NamingSystem: core-ns-nsi-medical-workers-positions 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-medical-workers-positions | *Version*:1 |
| Active as of 2024-01-01 | *Computable Name*:core-ns-nsi-medical-workers-positions |

 
Справочник НСИ Минздрава , может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1002, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1002/passport/9.5 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-nsi-medical-workers-positions",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-medical-workers-positions"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "core-ns-nsi-medical-workers-positions",
  "status" : "active",
  "kind" : "codesystem",
  "date" : "2024-01-01",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : " Справочник НСИ Минздрава <Должности медицинских и фармацевтических работников>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1002, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1002/passport/9.5",
  "uniqueId" : [{
    "type" : "oid",
    "value" : "1.2.643.5.1.13.13.11.1002",
    "comment" : "Основной"
  },
  {
    "type" : "uri",
    "value" : "http://fhir.ru/core/CodeSystem/core-ns-nsi-medical-workers-positions",
    "preferred" : true
  },
  {
    "type" : "uri",
    "value" : "https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1002/passport/9.5"
  }]
}

```
