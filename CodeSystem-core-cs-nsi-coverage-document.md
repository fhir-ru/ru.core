# Core CodeSystem NSI coverage document (Документы-основания для оплаты медицинских услуг) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core CodeSystem NSI coverage document (Документы-основания для оплаты медицинских услуг)**

## CodeSystem: Core CodeSystem NSI coverage document (Документы-основания для оплаты медицинских услуг) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Cs_Nsi_Coverage_Document |

 
НСИ МЗ РФ справочник [Документы-основания для оплаты](http://fhir.ru/core/CodeSystem/core-cs-nsi-coverage-document) 

 This Code system is referenced in the content logical definition of the following value sets: 

* [Core_Vs_Nsi_Coverage_Document](ValueSet-core-vs-nsi-coverage-document.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "core-cs-nsi-coverage-document",
  "url" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document",
  "version" : "1",
  "name" : "Core_Cs_Nsi_Coverage_Document",
  "title" : "Core CodeSystem NSI coverage document (Документы-основания для оплаты медицинских услуг)",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-09T17:27:53+00:00",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "НСИ МЗ РФ справочник [Документы-основания для оплаты](http://fhir.ru/core/CodeSystem/core-cs-nsi-coverage-document)",
  "caseSensitive" : false,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "1",
    "display" : "Полис ОМС"
  },
  {
    "code" : "2",
    "display" : "Полис ДМС"
  },
  {
    "code" : "3",
    "display" : "Договор на оказание платных медицинских услуг"
  }]
}

```
