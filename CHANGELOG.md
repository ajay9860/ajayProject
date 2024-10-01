# Customs-APP changelog

## 0.1.0

### Features

* CSV generation for Dubai custom/south.
* Update referenceID for Shipment inwarded.
* Commercial Invoice, Packing List Invoice and Delivery advice invoice structure.


# 0.2.0

### Improvements

* Fixed what needed fixing.

### New features

* 3PL driver/vehicle details update module implemented.
* Display product information using shipmentID for P2P and 3PL modules.


# 0.3.0

### Improvements

* Fixed what needed fixing.
* Removed referenceID from customs tab.
* [ T13163 ] - Rename custom invoice number to invoice number.
* [ T13185 ] - Minor UI fixes.
* [ T13138 ] - Create invoice template.

### Bug Fixes

* [ T13146 ] - Unable to login in first attempt.

### New features

* [ T13202 ] - Update status in 3pl table.
* [ T13251 ] - Update invoice format.
* [ T13216 ] - Create profile section.
* [ T13226 ] - Create an interactive dashboard.
* [ WIP ] - Added Delivery Note in Dubai South.


# 0.3.1

### Bug Fixes

* Fixed array count assignment to variables.


# 0.3.2

### Improvements

* Added error logs.


# 0.3.3

### Improvements

* Sanity checks for missing values like countryOfOrigin.


# 0.3.4

### Improvements

* Combined HSN Code and invoice number while increasing HSN Code quantity. Previously one HSN Code can have a
  single entry. This has been updated, if one HSN has multiple occurance with different invoice numbers, multiple line items will display against each HSN Code. Implemented in P2P only.


# 0.3.5

### Improvements

* Combined HSN Code and invoice number while increasing HSN Code quantity. Previously one HSN Code can have a
  single entry. This has been updated, if one HSN has multiple occurance with different invoice numbers, multiple line items will display against each HSN Code. Implemented in 3PL.


# 0.3.6

### Improvements

* Removed obsolete code and comments.

### New features

* Added button to upload CSV file for 3PL shipments to update vehicle details.


# 0.3.7

### New features

* Notifying the shipment ID which are invalid or absent in database when updating vehicle details in 3PL.


# 0.3.8

### Improvements

* Patches applied for invoice printing.


# 0.3.9

### New features

* Updated CSV columns for shipments coming in. Replaced `InvoiceNo` with `OfficeUse`. Also created a
  reference file when downloading CSV with product information for reference purpose.


# 0.3.10

### Bug Fixes

* [ T13392 ] - Viewport issue.


# 0.3.11

### Improvements

* Changed styles lang from css to scss.


# 0.3.12

### Improvements

* Removed scoped from style elements.


# 0.4.0

### Improvements

* Fixed what needed fixing. Under the hood improvements.
* [ T13437 ] - Invoice changes.
* [ T13330 ] - Dashboard enhancements and updates.
* User can search historic invoices with invoice number.
* Reference file will be downloaded for `Incoming/Outgoing` shipments for both `Dubai South` & `Dubai
  Customs`.
* Complete UI revamped and made responsive.


# 0.4.1

### Bug Fixes

* [ T13513 ] - Total amount in words is not valid.


# 0.4.2

### Improvements

* Updated invoice print logic to use `Vendor CSS` instead of `Custom CSS`.
* Updated bulma import syntax.
* Removed obsolete code and made code flow changes to improve performance issues.


# 0.4.3

### Bug Fixes

* Invoice not displaying when searched from invoice number.


# 0.4.4

### Improvements

* Product price and total price limited to decimal points.


# 0.4.5

### Improvements

* Added product ID in invoices. Replaced logic for clubbing HS code from comparing HS Code only to comparing
  HS Code and productID.


# 0.4.6

### New features

* Product details are also downloaded as CSV along with GP CSV when searched using vehicle number in 3PL.


# 0.4.7

### New features

* Implemented back button in invoice to keep searched vehicle data in place.
* [ T13589 ] - DN for 3PL shipments.


# 0.4.8

### New features

* [ T13646 ] - Save invoices as pdf.


# 0.4.9

### Improvements

* Updated file name to invoice number and updated orientation of PDF when saving PDF.


# 0.4.10

### Improvements

* [ T14020 ] - Invoice changes requirement.


# 0.4.11

### Bug-fixes

* Removed this from conditional v-if in HTML in delivery note and vendor invoice.


# 0.4.12

### Improvement

* Removed HSCode with invoicenumber combined check when downloading CSV for shipments coming in.


# 0.4.13

### Improvement

* [ T14451 ] - Removed obsolete code and added `INTransit` tab on dashboard.
* Fixed what needed fixing.


# 0.5.0

### Improvements

* Fixed what needed fixing.
* Two separate invoices one for local and customs goods  (BOE ref. no).
* One `Delivery Advice` will be generated at the end of month for customs invoice reference number
  starting with 30, i.e. only for `BOE` shipment details along with the HS code summary sheet.
* Merged `South` & `Customs` into `Gate Pass` tab considering Delivery Advice is required for `Dubai
  Customs` submission only.
* [ T14020 ] - Invoice changes requirement.
* [ T14835 ] - UI fixes.
* [ T14485 ] - UI revamp.
* [ T14461 ] - Delivery Advice revamp.

### Bug Fixes

* [ T14450 ] - Fix tabs switching issue.


# 0.5.1

### Improvement

* Fixed what needed fixing.
* Separated invoice specific logic in dedicated functions in p2p and 3pl.


# 0.5.2

### Improvement

* Fixed what needed fixing.
* Separated invoice specific logic in dedicated functions in p2p for shipment in.
* Activated auto refresh on dashboard for statistics. It was commented mistakenly in last build.


# 0.5.3

### Improvement

* Removed (commented) price and total price column against product in delivery note.
* Invoice size optimized and added driver name and vehicle number in invoice.


# 0.5.4

### Improvement

* Invoice size reduced and optimized.
* Added driver name and  vehicle number in invoice.


# 0.5.5

### Improvement

* Updated invoice template and logic for new invoice numbers.
* Separated local and boe goods csv.
* Fixed invoice search issue. (Requires implementation from scratch with new architecture)


# 0.5.6

### Improvement

* Separated local and boe goods csv for 3PL.
* Added vehicle number in file name for invoice pdf download.


# 0.5.7

### Improvement

* Removed price from all the invoices and changed name from `Commercial Invoice` to `Delivery Note`.


# 0.5.8

### Improvement

* Implemented functionality to push return shipments `BOE` data to warehouse.


# 0.6.0

### New features

* [WIP] - Integration with Dubai South portal.
* In this version, Dubai South gatepass service has been integrated for `Entry Gatepass`. Gatepass can be
  created after searching vehicle. Manual process is still available in case of service failure. This is still in a `Working in process` phase.


# 0.6.1

### Improvements

* Added attachmentName key for `Dubai South Entry Gatepass` service.
* Disabled auto refresh of timeline on dashboard.
* Removed `Vendor Invoice` from `Shipment Out` screen.

### New features

* For Vendor products entry, invoice number (Delivery Note number), shipmentId is stored against that invoice
  number. When same shipment is going out, customInvoiceNumber will be replaced with entry invoice number.


# 0.6.2

### Improvements

* Added `Failure` in error handling for `Dubai South` entry gatepass service.


# 0.7.0

### New Features

* [WIP] - This version is still a `Work In Progress` for integration with `Dubai South` portal.
* In this version, Dubai South gatepass service has been integrated for `Exit Gatepass`. Gatepass can be
  created after searching vehicle. Manual process is still available in case of service failure. This is still in a `Working in process` phase as error handling is still pending and BOE service is also pending.

### Improvements

* Added `attachmentTitle` key in Dubai South service payload.
* Performance tweaks and fixes.


# 0.7.1

### Bug Fixes

* [ T16691 ] - Fixed.


# 0.7.2

### Improvements

* Implemented `BOE Exit` web service.


# 0.7.3

### New Features

* HSCode update functionality implemented. Although this feature is disabled for now.
* [ T16551 ] - Create an interface to download Invoice data.


# 0.7.4

### Bug Fixes

* Replaced `HSCODE` keyname with `HSCode` in createLocalGatepass method in `shipmentIn` component.


# 0.7.5

### Bug Fixes

* Replaced `HSCODE` keyname with `HSCode` in createLocalGatepass method in `shipmentOut` component.


# 0.7.6

### Improvements

* Handled `Invalid HSCode` error to enable `HSCode` update modal in `shipmentIn` and `shipmentOut`.


# 0.7.7

### Improvements

* Handled empty HSCodes being sent to `Dubai South` gatepass creation service.


# 0.7.8

### New Features

* `Dubai South` Gatepass service for 3PL implemented.


# 0.7.9

### Bug Fixes

* Removed unwanted back ticks.


# 0.7.10

### Improvements

* Commented intimateWarehouse method call.


# 0.7.11

### Improvements

* [ T17065 ] - Enable back button in 3PL.

### New features

* [ T17068 ] - Allow dynamic shipments to be added for a gatepass.


# 0.7.12

### New features

* [ T17068 ] - Allow dynamic shipments to be added for a gatepass. Inter vehicle shipments allocation.


# 0.7.13

### Bug fixes

* Group similar `HSCode` & `BOENumber` quantity.


# 0.7.14

### New Features

* Replaced product HSCodes with available quantity HSCodes. This is a temporary ipmlementation till the time
  `Dubai South` clears pending gatepasses.


# 0.8.0

### New Features

* [ T17610 ] - Empty vehicle gatepass.
* [ T17631 ] - Create vehicle wise shipment selection.
* Implemented ACL for module wise access.
* Added logs, performance improvement, under the hood changes.

### Bug fixes

* `HSCode` starting with `30` but not `13` digit issue fixed.


# 0.8.1

### Improvements

* Disabled sourceMap in production mode.


# 0.8.2

### Improvements

* Implemented regex pattern in update password.


# 0.8.3

### Improvements

* Implemented access check for menu items.
* Calling API on logout to clear stored token.


# 0.8.4

### Improvements

* Handled scenario where HSCode consists of `@`.
* Commented API call on logout to clear stored token.


# 0.8.5

### Improvements

* [ T16549 ] - Create virtual hub for NDR shipments.
* Removed obsolete code and syntax fixes.
* Performance and under the hood improvements.


# 0.8.6

### Improvements

* [ T18678 ] - Consume Dubai South inventory on error.
* Fixed dashboard issue where driver tiles were missing.


# 0.8.7

### Improvements

* Fixed issue in localgatepass where only updated hsn were passed to gatepass api.
* Replaced hsn from `62071100` with `61071100`.
