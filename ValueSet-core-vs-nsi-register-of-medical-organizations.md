# Core ValueSet NSI register of medical organizations (Реестр медицинских организаций Российской Федерации) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core ValueSet NSI register of medical organizations (Реестр медицинских организаций Российской Федерации)**

## ValueSet: Core ValueSet NSI register of medical organizations (Реестр медицинских организаций Российской Федерации) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/ValueSet/core-vs-nsi-register-of-medical-organizations | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Vs_Nsi_Register_Of_Medical_Organizations |

 
Реестр медицинских организаций МЗРФ - набор из всех значений системы кодирования 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

 

### Expansion

No Expansion for this valueset (Unknown Code System)

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
  "id" : "core-vs-nsi-register-of-medical-organizations",
  "url" : "https://fhir.ru/ig/core/ValueSet/core-vs-nsi-register-of-medical-organizations",
  "version" : "1",
  "name" : "Core_Vs_Nsi_Register_Of_Medical_Organizations",
  "title" : "Core ValueSet NSI register of medical organizations (Реестр медицинских организаций Российской Федерации)",
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
  "description" : "Реестр медицинских организаций МЗРФ - набор из всех значений системы кодирования",
  "compose" : {
    "include" : [{
      "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-register-of-medical-organizations"
    }]
  }
}

```
