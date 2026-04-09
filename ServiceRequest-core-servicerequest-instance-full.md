# core-servicerequest-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-servicerequest-instance-full**

## Example ServiceRequest: core-servicerequest-instance-full

Profile: [Core Service Request (Заказ услуги)](StructureDefinition-core-servicerequest.md)

**status**: Active

**intent**: Plan

**subject**: [Мария-Антуанетта Иоганновна Габсбург-Лотарингская (official) Female, DoB: 1955-01-10 ( 6)](Patient-core-patient-instance-full.md)



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "core-servicerequest-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-servicerequest"]
  },
  "status" : "active",
  "intent" : "plan",
  "subject" : {
    "reference" : "Patient/core-patient-instance-full"
  }
}

```
