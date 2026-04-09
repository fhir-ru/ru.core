# core-ns-nsi-confidentiality - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-nsi-confidentiality**

## NamingSystem: core-ns-nsi-confidentiality 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-confidentiality | *Version*:1 |
| Active as of 2024-01-01 | *Computable Name*:core-ns-nsi-confidentiality |

 
Справочник НСИ Минздрава , может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.285, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.99.2.285/passport/1.2 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-nsi-confidentiality",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-confidentiality"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "core-ns-nsi-confidentiality",
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
  "description" : " Справочник НСИ Минздрава <Уровень конфиденциальности медицинского документа>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.285, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.99.2.285/passport/1.2",
  "uniqueId" : [{
    "type" : "oid",
    "value" : "1.2.643.5.1.13.13.99.2.285",
    "comment" : "Основной"
  },
  {
    "type" : "uri",
    "value" : "http://fhir.ru/core/CodeSystem/core-ns-nsi-confidentiality",
    "preferred" : true
  },
  {
    "type" : "uri",
    "value" : "https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.99.2.285/passport/1.2"
  }]
}

```
