# core-ns-nsi-sources-of-payment - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-ns-nsi-sources-of-payment**

## NamingSystem: core-ns-nsi-sources-of-payment 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-sources-of-payment | *Version*:1 |
| Active as of 2024-01-01 | *Computable Name*:core-ns-nsi-sources-of-payment |

 
Справочник НСИ Минздрава , может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1039, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment 



## Resource Content

```json
{
  "resourceType" : "NamingSystem",
  "id" : "core-ns-nsi-sources-of-payment",
  "extension" : [{
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.url",
    "valueUri" : "https://fhir.ru/ig/core/NamingSystem/core-ns-nsi-sources-of-payment"
  },
  {
    "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-NamingSystem.version",
    "valueString" : "1"
  }],
  "name" : "core-ns-nsi-sources-of-payment",
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
  "description" : " Справочник НСИ Минздрава <Источники оплаты медицинской помощи>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1039, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment",
  "uniqueId" : [{
    "type" : "oid",
    "value" : "1.2.643.5.1.13.13.11.1039",
    "comment" : "Основной"
  },
  {
    "type" : "uri",
    "value" : "http://fhir.ru/core/CodeSystem/core-ns-nsi-sources-of-payment",
    "preferred" : true
  },
  {
    "type" : "uri",
    "value" : "https://nsi.egisz.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1039/passport/5.2"
  }]
}

```
