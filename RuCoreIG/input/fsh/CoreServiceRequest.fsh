Profile: Core_ServiceRequest
Id:      core-servicerequest
Parent:       ServiceRequest
Title: "Заказ услуги (Ru Core)"
Description: "Заказ услуги"

* subject 1..1
* subject ^short = "Пациент"
* subject only Reference(Core_Patient)

//----------instance-full-------------------------------

Instance:   core-servicerequest-instance-full
InstanceOf: Core_ServiceRequest
Usage: #example

* status = #active

* intent = #plan

* subject = Reference(core-patient-instance-full)