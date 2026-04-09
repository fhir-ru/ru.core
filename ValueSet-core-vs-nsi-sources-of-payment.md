# Core ValueSet NSI sources of payment (Источники оплаты медицинской помощи) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core ValueSet NSI sources of payment (Источники оплаты медицинской помощи)**

## ValueSet: Core ValueSet NSI sources of payment (Источники оплаты медицинской помощи) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/ValueSet/core-vs-nsi-sources-of-payment | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Vs_Nsi_Sources_Of_Payment |

 
Источники оплаты медицинской помощи - набор из всех значений системы кодирования 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4B/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "core-vs-nsi-sources-of-payment",
  "url" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-sources-of-payment",
  "version" : "1",
  "name" : "Core_Vs_Nsi_Sources_Of_Payment",
  "title" : "Core ValueSet NSI sources of payment (Источники оплаты медицинской помощи)",
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
  "description" : "Источники оплаты медицинской помощи - набор из всех значений системы кодирования",
  "compose" : {
    "include" : [{
      "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-sources-of-payment"
    }]
  }
}

```
