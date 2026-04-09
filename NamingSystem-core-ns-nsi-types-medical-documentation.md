# core-ns-nsi-types-medical-documentation - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-nsi-types-medical-documentation**

## NamingSystem: core-ns-nsi-types-medical-documentation 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-types-medical-documentation | *Version*:1 |
| Active as of 2024-01-01 | *Computable Name*:core-ns-nsi-types-medical-documentation |

 
Справочник НСИ Минздрава , может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1522, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1522/passport/7.24 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-nsi-types-medical-documentation",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-types-medical-documentation"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "core-ns-nsi-types-medical-documentation",
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
  "description" : " Справочник НСИ Минздрава <Виды медицинской документации>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1522, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1522/passport/7.24",
  "uniqueId" : [{
    "type" : "oid",
    "value" : "1.2.643.5.1.13.13.11.1522",
    "comment" : "Основной"
  },
  {
    "type" : "uri",
    "value" : "http://fhir.ru/core/CodeSystem/core-ns-nsi-types-medical-documentation",
    "preferred" : true
  },
  {
    "type" : "uri",
    "value" : "https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1522/passport/7.24"
  }]
}

```
