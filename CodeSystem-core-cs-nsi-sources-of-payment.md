# Core CodeSystem NSI sources of payment (Источники оплаты медицинской помощи) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core CodeSystem NSI sources of payment (Источники оплаты медицинской помощи)**

## CodeSystem: Core CodeSystem NSI sources of payment (Источники оплаты медицинской помощи) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-sources-of-payment | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Cs_Nsi_Sources_Of_Payment |

 
НСИ МЗ РФ справочник [Источники оплаты медицинской помощи](http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment) 

 This Code system is referenced in the content logical definition of the following value sets: 

* [Core_Vs_Nsi_Sources_Of_Payment](ValueSet-core-vs-nsi-sources-of-payment.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "core-cs-nsi-sources-of-payment",
  "url" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-sources-of-payment",
  "version" : "1",
  "name" : "Core_Cs_Nsi_Sources_Of_Payment",
  "title" : "Core CodeSystem NSI sources of payment (Источники оплаты медицинской помощи)",
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
  "description" : "НСИ МЗ РФ справочник [Источники оплаты медицинской помощи](http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment)",
  "caseSensitive" : false,
  "content" : "complete",
  "count" : 10,
  "concept" : [{
    "code" : "1",
    "display" : "Средства обязательного медицинского страхования"
  },
  {
    "code" : "3",
    "display" : "Средства добровольного медицинского страхования"
  },
  {
    "code" : "4",
    "display" : "Средства пациента"
  },
  {
    "code" : "5",
    "display" : "Средства третьих физических лиц"
  },
  {
    "code" : "6",
    "display" : "Средства третьих юридических лиц"
  },
  {
    "code" : "8",
    "display" : "Средства федерального бюджета"
  },
  {
    "code" : "9",
    "display" : "Средства регионального бюджета"
  },
  {
    "code" : "10",
    "display" : "Средства обязательного социального страхования"
  },
  {
    "code" : "11",
    "display" : "Средства бюджета медицинской организации"
  },
  {
    "code" : "12",
    "display" : "Средства федерального и регионального бюджета"
  }]
}

```
