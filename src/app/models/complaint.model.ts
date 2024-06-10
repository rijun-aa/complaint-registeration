export interface Complaint {
  id: number;
  customerId: number;
  applicationId: number;
  serviceId: number;
  branchId: number;
  timestamp: string;
  status: string;
  customer: Customer | null;
  branch: Branch | null;
  application: Application | null;
  service: Service | null;
  description: string;
}

  
  export interface Customer {
    customerid: number;
    name: string;
    mobile: string;
    email: string;
    accountNumber: string;
    password: string;
  }
  
  export interface Branch {
    branchid: number;
    state: string;
    district: string;
    branchName: string;
  }
  
  export interface Application {
    applicationid: number;
    applicationName: string;
  }
  
  export interface Service {
    serviceid: number;
    serviceName: string;
  }
  