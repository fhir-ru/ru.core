# core-observation-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-observation-instance-full**

## Example Observation: core-observation-instance-full

Profile: [Core Observation (Измерения и простые утверждения о пациенте)](StructureDefinition-core-observation.md)

**status**: Final

**code**: Transfuse albumin [Volume]

**subject**: [Мария-Антуанетта Иоганновна Габсбург-Лотарингская (official) Female, DoB: 1955-01-10 ( 6)](Patient-core-patient-instance-full.md)

**performer**: [Practitioner Мария Ивановна Иванова (official)](Practitioner-core-practitioner-instance-full.md)



## Resource Content

```json
{
  "resourceType" : "Observation",
  "id" : "core-observation-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-observation"]
  },
  "status" : "final",
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "10414-1"
    }]
  },
  "subject" : {
    "reference" : "Patient/core-patient-instance-full"
  },
  "performer" : [{
    "reference" : "Practitioner/core-practitioner-instance-full"
  }]
}

```
