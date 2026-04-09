# core-ns-nsi-identity-document - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-nsi-identity-document**

## NamingSystem: core-ns-nsi-identity-document 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-identity-document | *Version*:1 |
| Active as of 2023-10-23 | *Computable Name*:core-ns-nsi-identity-document |

 
Справочник НСИ Минздрава <Документы, удостоверяющие личность>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.48, Дополнительный OID: 1.2.643.5.1.13.13.11.1011, 1.2.643.5.1.13.2.1.1.736, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-identity-document 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-nsi-identity-document",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-identity-document"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "core-ns-nsi-identity-document",
  "status" : "active",
  "kind" : "codesystem",
  "date" : "2023-10-23",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : " Справочник НСИ Минздрава <Документы, удостоверяющие личность>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.99.2.48, Дополнительный OID: 1.2.643.5.1.13.13.11.1011, 1.2.643.5.1.13.2.1.1.736, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-identity-document ",
  "uniqueId" : [{
    "type" : "oid",
    "value" : "1.2.643.5.1.13.13.99.2.48",
    "comment" : "Основной"
  },
  {
    "type" : "oid",
    "value" : "1.2.643.5.1.13.13.11.1011",
    "comment" : "Дополнительный"
  },
  {
    "type" : "oid",
    "value" : "1.2.643.5.1.13.2.1.1.736",
    "comment" : "Дополнительный"
  },
  {
    "type" : "uri",
    "value" : "http://fhir.ru/core/CodeSystem/core-cs-nsi-identity-document",
    "preferred" : true
  },
  {
    "type" : "uri",
    "value" : "http://nsi.rosminzdrav.ru/#!/refbook/1.2.643.5.1.13.13.99.2.48"
  }]
}

```
