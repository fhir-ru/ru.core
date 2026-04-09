# Core CodeSystem NSI Identity Documents (Документы удостоверяющие личность) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core CodeSystem NSI Identity Documents (Документы удостоверяющие личность)**

## CodeSystem: Core CodeSystem NSI Identity Documents (Документы удостоверяющие личность) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-identity-document | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Cs_Nsi_Identity_Document |

 
НСИ МЗ РФ справочник [документы удостоверяющие личность](http://fhir.ru/core/NamingSystem/core-ns-nsi-identity-document) 

 This Code system is referenced in the content logical definition of the following value sets: 

* [Core_Vs_Nsi_Identity_Documents](ValueSet-core-vs-nsi-identity-documents.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "core-cs-nsi-identity-document",
  "url" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-identity-document",
  "version" : "1",
  "name" : "Core_Cs_Nsi_Identity_Document",
  "title" : "Core CodeSystem NSI Identity Documents (Документы удостоверяющие личность)",
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
  "description" : "НСИ МЗ РФ справочник [документы удостоверяющие личность](http://fhir.ru/core/NamingSystem/core-ns-nsi-identity-document)",
  "caseSensitive" : false,
  "content" : "example",
  "concept" : [{
    "code" : "100",
    "display" : "Общегражданские документы",
    "concept" : [{
      "code" : "1",
      "display" : "Паспорт гражданина Российской Федерации"
    },
    {
      "code" : "42",
      "display" : "Заграничный паспорт гражданина Российской Федерации"
    },
    {
      "code" : "2",
      "display" : "Заграничный паспорт гражданина РФ с электронным носителем информации"
    },
    {
      "code" : "5",
      "display" : "Временное удостоверение личности гражданина РФ"
    },
    {
      "code" : "4",
      "display" : "Служебный паспорт гражданина РФ"
    },
    {
      "code" : "6",
      "display" : "Свидетельство о рождении"
    },
    {
      "code" : "24",
      "display" : "Медицинское свидетельство о рождении",
      "definition" : "для детей в возрасте до 1 месяца"
    },
    {
      "code" : "43",
      "display" : "Свидетельство о смерти"
    }]
  },
  {
    "code" : "400",
    "display" : "Специальные документы, связанные с удостоверением личности",
    "concept" : [{
      "code" : "36",
      "display" : "Водительское удостоверение"
    }]
  }]
}

```
