# core-coverage-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-coverage-instance-full**

## Example Coverage: core-coverage-instance-full

Profile: [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md)

**identifier**: Полис ОМС/1234567898765432

**status**: Active

**type**: Средства обязательного медицинского страхования

**beneficiary**: [Мария-Антуанетта Иоганновна Габсбург-Лотарингская (official) Female, DoB: 1955-01-10 ( 6)](Patient-core-patient-instance-full.md)

**payor**: [Владимир Геннадиевич Корольков (official) Male, DoB: 1955-01-10 ( 1)](Patient-core-patient-payer-instance-full.md)



## Resource Content

```json
{
  "resourceType" : "Coverage",
  "id" : "core-coverage-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-coverage"]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-coverage-document",
        "code" : "1"
      }]
    },
    "system" : "http://fhir.ru/core/systems/OMS",
    "value" : "1234567898765432"
  }],
  "status" : "active",
  "type" : {
    "coding" : [{
      "system" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-sources-of-payment",
      "code" : "1"
    }]
  },
  "beneficiary" : {
    "reference" : "Patient/core-patient-instance-full"
  },
  "payor" : [{
    "reference" : "Patient/core-patient-payer-instance-full"
  }]
}

```
