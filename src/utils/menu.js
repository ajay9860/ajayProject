const MENU = [
  {
    name: 'Dubai',
    icon: 'file-invoice',
    to: '',
    hasAccess: true,
    isSubMenuActive: false,
    isActive: false,
    subMenus: [
      {
        name: 'Dashboard',
        to: { name: 'dashboard' },
        isActive: true
      },
      {
        name: 'userdetails',
        to: { name: 'userdetails' },
        isActive: true
      },
      {
        name: 'profile',
        to: { name: 'profile' },
        isActive: true
      },
      {
        name: 'Gate Pass',
        to: { name: 'gatepass' },
        isActive: true
      },
      {
        name: 'shipmentTracking',
        to: { name: 'shipmentTracking' },
        isActive: true
      },
      {
        name: 'gatepass Generate',
        to: { name: 'gatepassGenerate' },
        isActive: true
      },
      {
        name: '3PL',
        to: { name: 'threepl' },
        isActive: true
      },
      {
        name: 'Rest of World',
        to: { name: 'restofworld' },
        isActive: true
      },
      {
        name: 'Product Details',
        to: { name: 'productInformation' },
        isActive: true
      },
      {
        name: 'Invoice',
        to: { name: 'invoice' },
        isActive: true
      },
      {
        name: 'Invoice Information',
        to: { name: 'invoiceInfo' },
        isActive: true
      },
      {
        name: 'Shipment Allocation',
        to: { name: 'shipmentAllocation' },
        isActive: true
      },
      {
        name: 'BOE Details',
        to: { name: 'boeDetails' },
        isActive: true
      },
      {
        name: 'Vehicle Details',
        to: { name: 'vehicleDetails' },
        isActive: true
      },
      {
        name: 'Update Shipment',
        to: { name: 'updateShipment' },
        isActive: true
      },
      {
        name: 'PO Details',
        to: { name: 'poDetails' },
        isActive: true
      },
      {
        name: 'Gatepass Number',
        to: { name: 'gatepassnumber' },
        isActive: true
      }
    ]
  }
];

export default MENU;
