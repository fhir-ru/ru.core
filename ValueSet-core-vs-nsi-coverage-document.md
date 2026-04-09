# Core ValueSet NSI coverage document (документы-основания для оплаты медицинских услуг) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core ValueSet NSI coverage document (документы-основания для оплаты медицинских услуг)**

## ValueSet: Core ValueSet NSI coverage document (документы-основания для оплаты медицинских услуг) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/ValueSet/core-vs-nsi-coverage-document | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Vs_Nsi_Coverage_Document |

 
документы-основания для оплаты медицинских услуг - набор из всех значений системы кодирования 

 **References** 

* [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md)

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
  "id" : "core-vs-nsi-coverage-document",
  "url" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-coverage-document",
  "version" : "1",
  "name" : "Core_Vs_Nsi_Coverage_Document",
  "title" : "Core ValueSet NSI coverage document (документы-основания для оплаты медицинских услуг)",
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
  "description" : "документы-основания для оплаты медицинских услуг - набор из всех значений системы кодирования",
  "compose" : {
    "include" : [{
      "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document"
    }]
  }
}

```
