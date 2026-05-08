// ── Experience Levels ──
export const experienceLevels = [
  { id: "intern", label: "Intern / Trainee", shortLabel: "Intern" },
  { id: "entry", label: "Entry Level (0-2 yrs)", shortLabel: "Entry" },
  { id: "mid", label: "Mid Level (3-5 yrs)", shortLabel: "Mid" },
  { id: "senior", label: "Senior (6-10 yrs)", shortLabel: "Senior" },
  { id: "lead", label: "Lead / Principal (10+ yrs)", shortLabel: "Lead" },
  { id: "staff", label: "Staff / Distinguished", shortLabel: "Staff" },
  { id: "management", label: "Management / Director", shortLabel: "Mgmt" },
  { id: "executive", label: "Executive / C-Level", shortLabel: "Exec" },
];

// ── Specializations (Massively Expanded) ──
export const specializations = [
  // ═══════════════════════════════════════════════════════════════
  // NETWORKING
  // ═══════════════════════════════════════════════════════════════
  { id: "network_engineer", label: "Network Engineer", icon: "🔀", category: "Networking" },
  { id: "routing_switching", label: "Routing & Switching", icon: "🔄", category: "Networking" },
  { id: "network_architect", label: "Network Architect", icon: "🏗️", category: "Networking" },
  { id: "network_security", label: "Network Security", icon: "🛡️", category: "Networking" },
  { id: "wireless", label: "Wireless / Wi-Fi / RF", icon: "📡", category: "Networking" },
  { id: "sdwan", label: "SD-WAN / SASE", icon: "🌐", category: "Networking" },
  { id: "sdn", label: "SDN (Software Defined)", icon: "💠", category: "Networking" },
  { id: "nfv", label: "NFV (Network Functions)", icon: "📦", category: "Networking" },
  { id: "voip", label: "VoIP / UC / Telephony", icon: "📞", category: "Networking" },
  { id: "network_automation", label: "Network Automation", icon: "⚙️", category: "Networking" },
  { id: "network_monitoring", label: "Network Monitoring", icon: "📊", category: "Networking" },
  { id: "isp", label: "ISP / Service Provider", icon: "🛰️", category: "Networking" },
  { id: "mpls", label: "MPLS / Segment Routing", icon: "🔗", category: "Networking" },
  { id: "bgp_ospf", label: "BGP / OSPF / EIGRP", icon: "🗺️", category: "Networking" },
  { id: "load_balancing", label: "Load Balancing / ADC", icon: "⚖️", category: "Networking" },
  { id: "dns_dhcp", label: "DNS / DHCP / IPAM", icon: "🌍", category: "Networking" },
  { id: "wan_optimization", label: "WAN Optimization", icon: "🚀", category: "Networking" },
  { id: "network_cable", label: "Network Cabling / Fiber", icon: "🔌", category: "Networking" },

  // ═══════════════════════════════════════════════════════════════
  // SYSTEM ADMINISTRATION
  // ═══════════════════════════════════════════════════════════════
  { id: "sysadmin", label: "Systems Administrator", icon: "🖥️", category: "SysAdmin" },
  { id: "windows_admin", label: "Windows Administrator", icon: "🪟", category: "SysAdmin" },
  { id: "windows_server", label: "Windows Server Admin", icon: "🖥️", category: "SysAdmin" },
  { id: "linux_admin", label: "Linux Administrator", icon: "🐧", category: "SysAdmin" },
  { id: "unix_admin", label: "Unix Administrator", icon: "🔷", category: "SysAdmin" },
  { id: "rhel_admin", label: "RHEL / CentOS Admin", icon: "🎩", category: "SysAdmin" },
  { id: "ubuntu_admin", label: "Ubuntu / Debian Admin", icon: "🟠", category: "SysAdmin" },
  { id: "macos_admin", label: "macOS Administrator", icon: "🍎", category: "SysAdmin" },
  { id: "solaris_admin", label: "Solaris Administrator", icon: "☀️", category: "SysAdmin" },
  { id: "aix_admin", label: "AIX Administrator", icon: "🔵", category: "SysAdmin" },
  { id: "mainframe", label: "Mainframe / z/OS", icon: "🏛️", category: "SysAdmin" },
  { id: "as400", label: "AS/400 / IBM i", icon: "📟", category: "SysAdmin" },
  { id: "server_admin", label: "Server Administrator", icon: "💾", category: "SysAdmin" },
  { id: "infrastructure_admin", label: "Infrastructure Admin", icon: "🏗️", category: "SysAdmin" },
  { id: "systems_engineer", label: "Systems Engineer", icon: "⚙️", category: "SysAdmin" },
  { id: "platform_admin", label: "Platform Administrator", icon: "🎛️", category: "SysAdmin" },

  // ═══════════════════════════════════════════════════════════════
  // ACTIVE DIRECTORY & IDENTITY
  // ═══════════════════════════════════════════════════════════════
  { id: "active_directory", label: "Active Directory", icon: "📂", category: "Identity" },
  { id: "azure_ad", label: "Azure AD / Entra ID", icon: "🔷", category: "Identity" },
  { id: "ldap", label: "LDAP / Directory Services", icon: "📁", category: "Identity" },
  { id: "group_policy", label: "Group Policy (GPO)", icon: "📋", category: "Identity" },
  { id: "iam_engineer", label: "IAM Engineer", icon: "🪪", category: "Identity" },
  { id: "pam", label: "PAM (Privileged Access)", icon: "🔐", category: "Identity" },
  { id: "sso_mfa", label: "SSO / MFA", icon: "🔑", category: "Identity" },
  { id: "pki", label: "PKI / Certificates", icon: "📜", category: "Identity" },
  { id: "identity_governance", label: "Identity Governance", icon: "👥", category: "Identity" },

  // ═══════════════════════════════════════════════════════════════
  // MICROSOFT ECOSYSTEM
  // ═══════════════════════════════════════════════════════════════
  { id: "microsoft_365", label: "Microsoft 365 Admin", icon: "Ⓜ️", category: "Microsoft" },
  { id: "exchange", label: "Exchange / Email Admin", icon: "📧", category: "Microsoft" },
  { id: "exchange_online", label: "Exchange Online", icon: "☁️", category: "Microsoft" },
  { id: "sharepoint", label: "SharePoint Admin", icon: "📄", category: "Microsoft" },
  { id: "teams_admin", label: "Teams Administrator", icon: "💬", category: "Microsoft" },
  { id: "intune", label: "Intune / Endpoint Manager", icon: "📱", category: "Microsoft" },
  { id: "sccm", label: "SCCM / MECM / ConfigMgr", icon: "⚙️", category: "Microsoft" },
  { id: "scom", label: "SCOM (Operations Manager)", icon: "📊", category: "Microsoft" },
  { id: "wsus", label: "WSUS / Patch Management", icon: "🔄", category: "Microsoft" },
  { id: "hyperv", label: "Hyper-V Administrator", icon: "📦", category: "Microsoft" },
  { id: "azure_admin", label: "Azure Administrator", icon: "☁️", category: "Microsoft" },
  { id: "power_platform", label: "Power Platform", icon: "⚡", category: "Microsoft" },
  { id: "dynamics_365", label: "Dynamics 365", icon: "🔄", category: "Microsoft" },

  // ═══════════════════════════════════════════════════════════════
  // VIRTUALIZATION
  // ═══════════════════════════════════════════════════════════════
  { id: "virtualization", label: "Virtualization Engineer", icon: "📦", category: "Virtualization" },
  { id: "vmware", label: "VMware vSphere/ESXi", icon: "🟢", category: "Virtualization" },
  { id: "vmware_nsx", label: "VMware NSX", icon: "🔷", category: "Virtualization" },
  { id: "vmware_vsan", label: "VMware vSAN", icon: "💾", category: "Virtualization" },
  { id: "vdi", label: "VDI Administrator", icon: "🖥️", category: "Virtualization" },
  { id: "horizon", label: "VMware Horizon", icon: "🌅", category: "Virtualization" },
  { id: "citrix", label: "Citrix Administrator", icon: "🍊", category: "Virtualization" },
  { id: "xenserver", label: "XenServer / XCP-ng", icon: "⚪", category: "Virtualization" },
  { id: "kvm", label: "KVM / QEMU", icon: "🔲", category: "Virtualization" },
  { id: "proxmox", label: "Proxmox VE", icon: "🟧", category: "Virtualization" },
  { id: "openstack", label: "OpenStack", icon: "⭕", category: "Virtualization" },
  { id: "nutanix", label: "Nutanix", icon: "🔺", category: "Virtualization" },
  { id: "hci", label: "HCI (Hyper-Converged)", icon: "📊", category: "Virtualization" },

  // ═══════════════════════════════════════════════════════════════
  // STORAGE & BACKUP
  // ═══════════════════════════════════════════════════════════════
  { id: "storage_engineer", label: "Storage Engineer", icon: "💾", category: "Storage" },
  { id: "san_admin", label: "SAN Administrator", icon: "🔲", category: "Storage" },
  { id: "nas_admin", label: "NAS Administrator", icon: "📁", category: "Storage" },
  { id: "netapp", label: "NetApp", icon: "🔷", category: "Storage" },
  { id: "dell_emc", label: "Dell EMC", icon: "🔵", category: "Storage" },
  { id: "pure_storage", label: "Pure Storage", icon: "🟠", category: "Storage" },
  { id: "hpe_storage", label: "HPE / 3PAR / Nimble", icon: "🟢", category: "Storage" },
  { id: "ibm_storage", label: "IBM Storage", icon: "🔷", category: "Storage" },
  { id: "hitachi", label: "Hitachi Vantara", icon: "🔴", category: "Storage" },
  { id: "object_storage", label: "Object Storage (S3/MinIO)", icon: "📦", category: "Storage" },
  { id: "ceph", label: "Ceph Storage", icon: "🐙", category: "Storage" },
  { id: "glusterfs", label: "GlusterFS", icon: "🔴", category: "Storage" },
  { id: "backup_admin", label: "Backup Administrator", icon: "💿", category: "Storage" },
  { id: "veeam", label: "Veeam Backup", icon: "🟢", category: "Storage" },
  { id: "commvault", label: "Commvault", icon: "🔵", category: "Storage" },
  { id: "netbackup", label: "NetBackup / Veritas", icon: "🟡", category: "Storage" },
  { id: "rubrik", label: "Rubrik", icon: "🔷", category: "Storage" },
  { id: "cohesity", label: "Cohesity", icon: "🟢", category: "Storage" },
  { id: "dr_specialist", label: "Disaster Recovery", icon: "🚨", category: "Storage" },
  { id: "bc_specialist", label: "Business Continuity", icon: "♻️", category: "Storage" },

  // ═══════════════════════════════════════════════════════════════
  // DATA CENTER
  // ═══════════════════════════════════════════════════════════════
  { id: "datacenter_engineer", label: "Data Center Engineer", icon: "🏢", category: "DataCenter" },
  { id: "datacenter_tech", label: "Data Center Technician", icon: "🔧", category: "DataCenter" },
  { id: "datacenter_ops", label: "DC Operations", icon: "📊", category: "DataCenter" },
  { id: "datacenter_manager", label: "DC Manager", icon: "👔", category: "DataCenter" },
  { id: "colo_engineer", label: "Colocation Engineer", icon: "🏗️", category: "DataCenter" },
  { id: "facilities_engineer", label: "Facilities Engineer", icon: "🏭", category: "DataCenter" },
  { id: "hardware_engineer", label: "Hardware Engineer", icon: "🔩", category: "DataCenter" },
  { id: "rack_stack", label: "Rack & Stack Tech", icon: "📚", category: "DataCenter" },
  { id: "power_cooling", label: "Power & Cooling", icon: "❄️", category: "DataCenter" },
  { id: "dcim", label: "DCIM Administrator", icon: "📈", category: "DataCenter" },
  { id: "capacity_planning", label: "Capacity Planning", icon: "📊", category: "DataCenter" },

  // ═══════════════════════════════════════════════════════════════
  // CLOUD PLATFORMS
  // ═══════════════════════════════════════════════════════════════
  { id: "cloud_engineer", label: "Cloud Engineer", icon: "☁️", category: "Cloud" },
  { id: "cloud_architect", label: "Cloud Architect", icon: "🏗️", category: "Cloud" },
  { id: "aws", label: "AWS", icon: "🟠", category: "Cloud" },
  { id: "aws_solutions_architect", label: "AWS Solutions Architect", icon: "📐", category: "Cloud" },
  { id: "aws_devops", label: "AWS DevOps", icon: "⚙️", category: "Cloud" },
  { id: "azure", label: "Microsoft Azure", icon: "🔵", category: "Cloud" },
  { id: "azure_architect", label: "Azure Architect", icon: "🏗️", category: "Cloud" },
  { id: "gcp", label: "Google Cloud (GCP)", icon: "🔴", category: "Cloud" },
  { id: "gcp_architect", label: "GCP Architect", icon: "📐", category: "Cloud" },
  { id: "oracle_cloud", label: "Oracle Cloud (OCI)", icon: "🔴", category: "Cloud" },
  { id: "ibm_cloud", label: "IBM Cloud", icon: "🔷", category: "Cloud" },
  { id: "alibaba_cloud", label: "Alibaba Cloud", icon: "🟠", category: "Cloud" },
  { id: "multi_cloud", label: "Multi-Cloud", icon: "☁️", category: "Cloud" },
  { id: "hybrid_cloud", label: "Hybrid Cloud", icon: "🔀", category: "Cloud" },
  { id: "private_cloud", label: "Private Cloud", icon: "🔒", category: "Cloud" },
  { id: "cloud_migration", label: "Cloud Migration", icon: "🚀", category: "Cloud" },
  { id: "cloud_native", label: "Cloud Native", icon: "🌱", category: "Cloud" },
  { id: "serverless", label: "Serverless / Lambda", icon: "⚡", category: "Cloud" },
  { id: "finops", label: "FinOps / Cloud Cost", icon: "💰", category: "Cloud" },
  { id: "cloud_networking", label: "Cloud Networking", icon: "🌐", category: "Cloud" },
  { id: "cloud_security", label: "Cloud Security", icon: "🔐", category: "Cloud" },

  // ═══════════════════════════════════════════════════════════════
  // DEVOPS & SRE
  // ═══════════════════════════════════════════════════════════════
  { id: "devops", label: "DevOps Engineer", icon: "♾️", category: "DevOps" },
  { id: "sre", label: "Site Reliability (SRE)", icon: "⚡", category: "DevOps" },
  { id: "platform_engineer", label: "Platform Engineer", icon: "🎛️", category: "DevOps" },
  { id: "release_engineer", label: "Release Engineer", icon: "🚀", category: "DevOps" },
  { id: "build_engineer", label: "Build Engineer", icon: "🔨", category: "DevOps" },
  { id: "infrastructure_engineer", label: "Infrastructure Engineer", icon: "🏗️", category: "DevOps" },
  { id: "automation_engineer", label: "Automation Engineer", icon: "🤖", category: "DevOps" },
  { id: "cicd", label: "CI/CD Engineer", icon: "🔁", category: "DevOps" },
  { id: "gitops", label: "GitOps Engineer", icon: "📦", category: "DevOps" },
  { id: "production_engineer", label: "Production Engineer", icon: "🏭", category: "DevOps" },
  { id: "chaos_engineer", label: "Chaos Engineer", icon: "🔥", category: "DevOps" },
  { id: "observability", label: "Observability Engineer", icon: "👁️", category: "DevOps" },

  // ═══════════════════════════════════════════════════════════════
  // CONTAINERS & ORCHESTRATION
  // ═══════════════════════════════════════════════════════════════
  { id: "kubernetes", label: "Kubernetes Engineer", icon: "☸️", category: "Containers" },
  { id: "k8s_admin", label: "Kubernetes Admin", icon: "⚙️", category: "Containers" },
  { id: "docker", label: "Docker Engineer", icon: "🐳", category: "Containers" },
  { id: "openshift", label: "OpenShift", icon: "🔴", category: "Containers" },
  { id: "rancher", label: "Rancher", icon: "🐄", category: "Containers" },
  { id: "eks", label: "AWS EKS", icon: "🟠", category: "Containers" },
  { id: "aks", label: "Azure AKS", icon: "🔵", category: "Containers" },
  { id: "gke", label: "Google GKE", icon: "🔴", category: "Containers" },
  { id: "helm", label: "Helm Charts", icon: "⛵", category: "Containers" },
  { id: "service_mesh", label: "Service Mesh (Istio)", icon: "🔗", category: "Containers" },
  { id: "container_security", label: "Container Security", icon: "🔒", category: "Containers" },

  // ═══════════════════════════════════════════════════════════════
  // INFRASTRUCTURE AS CODE
  // ═══════════════════════════════════════════════════════════════
  { id: "iac", label: "Infrastructure as Code", icon: "📝", category: "IaC" },
  { id: "terraform", label: "Terraform", icon: "🟪", category: "IaC" },
  { id: "pulumi", label: "Pulumi", icon: "🔷", category: "IaC" },
  { id: "cloudformation", label: "CloudFormation", icon: "🟠", category: "IaC" },
  { id: "arm_templates", label: "ARM / Bicep", icon: "🔵", category: "IaC" },
  { id: "ansible", label: "Ansible", icon: "⚫", category: "IaC" },
  { id: "puppet", label: "Puppet", icon: "🎭", category: "IaC" },
  { id: "chef", label: "Chef", icon: "👨‍🍳", category: "IaC" },
  { id: "saltstack", label: "SaltStack", icon: "🧂", category: "IaC" },

  // ═══════════════════════════════════════════════════════════════
  // CI/CD & VERSION CONTROL
  // ═══════════════════════════════════════════════════════════════
  { id: "jenkins", label: "Jenkins", icon: "🔴", category: "CI/CD" },
  { id: "gitlab_ci", label: "GitLab CI/CD", icon: "🦊", category: "CI/CD" },
  { id: "github_actions", label: "GitHub Actions", icon: "🐙", category: "CI/CD" },
  { id: "azure_devops", label: "Azure DevOps", icon: "🔵", category: "CI/CD" },
  { id: "circleci", label: "CircleCI", icon: "⚫", category: "CI/CD" },
  { id: "travis", label: "Travis CI", icon: "🟡", category: "CI/CD" },
  { id: "bamboo", label: "Bamboo", icon: "🟢", category: "CI/CD" },
  { id: "teamcity", label: "TeamCity", icon: "🟢", category: "CI/CD" },
  { id: "argocd", label: "ArgoCD", icon: "🐙", category: "CI/CD" },
  { id: "flux", label: "Flux CD", icon: "🔵", category: "CI/CD" },
  { id: "spinnaker", label: "Spinnaker", icon: "🌀", category: "CI/CD" },
  { id: "git", label: "Git / Version Control", icon: "📚", category: "CI/CD" },

  // ═══════════════════════════════════════════════════════════════
  // MONITORING & OBSERVABILITY
  // ═══════════════════════════════════════════════════════════════
  { id: "monitoring_engineer", label: "Monitoring Engineer", icon: "📊", category: "Monitoring" },
  { id: "prometheus", label: "Prometheus", icon: "🔥", category: "Monitoring" },
  { id: "grafana", label: "Grafana", icon: "📈", category: "Monitoring" },
  { id: "datadog", label: "Datadog", icon: "🐕", category: "Monitoring" },
  { id: "newrelic", label: "New Relic", icon: "🟢", category: "Monitoring" },
  { id: "dynatrace", label: "Dynatrace", icon: "🔵", category: "Monitoring" },
  { id: "appdynamics", label: "AppDynamics", icon: "🔷", category: "Monitoring" },
  { id: "nagios", label: "Nagios", icon: "🟢", category: "Monitoring" },
  { id: "zabbix", label: "Zabbix", icon: "🔴", category: "Monitoring" },
  { id: "prtg", label: "PRTG", icon: "🟡", category: "Monitoring" },
  { id: "solarwinds", label: "SolarWinds", icon: "☀️", category: "Monitoring" },
  { id: "splunk_infra", label: "Splunk Infrastructure", icon: "🟢", category: "Monitoring" },
  { id: "elastic_observability", label: "Elastic Observability", icon: "🟡", category: "Monitoring" },
  { id: "cloudwatch", label: "AWS CloudWatch", icon: "🟠", category: "Monitoring" },
  { id: "azure_monitor", label: "Azure Monitor", icon: "🔵", category: "Monitoring" },
  { id: "pagerduty", label: "PagerDuty", icon: "🟢", category: "Monitoring" },
  { id: "opsgenie", label: "OpsGenie", icon: "🔵", category: "Monitoring" },

  // ═══════════════════════════════════════════════════════════════
  // CYBERSECURITY
  // ═══════════════════════════════════════════════════════════════
  { id: "cybersecurity", label: "Cybersecurity Engineer", icon: "🔐", category: "Security" },
  { id: "security_analyst", label: "Security Analyst", icon: "🔍", category: "Security" },
  { id: "security_architect", label: "Security Architect", icon: "🏗️", category: "Security" },
  { id: "soc_analyst", label: "SOC Analyst", icon: "👁️", category: "Security" },
  { id: "soc_tier1", label: "SOC Analyst Tier 1", icon: "1️⃣", category: "Security" },
  { id: "soc_tier2", label: "SOC Analyst Tier 2", icon: "2️⃣", category: "Security" },
  { id: "soc_tier3", label: "SOC Analyst Tier 3", icon: "3️⃣", category: "Security" },
  { id: "soc_manager", label: "SOC Manager", icon: "👔", category: "Security" },
  { id: "penetration_testing", label: "Penetration Tester", icon: "🎯", category: "Security" },
  { id: "red_team", label: "Red Team Operator", icon: "🔴", category: "Security" },
  { id: "blue_team", label: "Blue Team / Defender", icon: "🔵", category: "Security" },
  { id: "purple_team", label: "Purple Team", icon: "🟣", category: "Security" },
  { id: "incident_response", label: "Incident Response", icon: "🚨", category: "Security" },
  { id: "dfir", label: "DFIR Analyst", icon: "🔬", category: "Security" },
  { id: "threat_intelligence", label: "Threat Intelligence", icon: "🕵️", category: "Security" },
  { id: "threat_hunter", label: "Threat Hunter", icon: "🎯", category: "Security" },
  { id: "vulnerability_mgmt", label: "Vulnerability Management", icon: "🔍", category: "Security" },
  { id: "appsec", label: "Application Security", icon: "🔒", category: "Security" },
  { id: "devsecops", label: "DevSecOps", icon: "🔐", category: "Security" },
  { id: "forensics", label: "Digital Forensics", icon: "🔬", category: "Security" },
  { id: "malware_analysis", label: "Malware Analyst", icon: "🦠", category: "Security" },
  { id: "reverse_engineer", label: "Reverse Engineer", icon: "🔧", category: "Security" },
  { id: "grc", label: "GRC / Compliance", icon: "📋", category: "Security" },
  { id: "security_auditor", label: "Security Auditor", icon: "✅", category: "Security" },
  { id: "privacy_engineer", label: "Privacy Engineer", icon: "🔏", category: "Security" },

  // ═══════════════════════════════════════════════════════════════
  // SECURITY TOOLS & PLATFORMS
  // ═══════════════════════════════════════════════════════════════
  { id: "firewall_engineer", label: "Firewall Engineer", icon: "🔥", category: "SecTools" },
  { id: "paloalto_engineer", label: "Palo Alto Engineer", icon: "🔶", category: "SecTools" },
  { id: "fortinet_engineer", label: "Fortinet Engineer", icon: "🔴", category: "SecTools" },
  { id: "checkpoint_engineer", label: "Check Point Engineer", icon: "🟢", category: "SecTools" },
  { id: "cisco_security", label: "Cisco Security", icon: "🔵", category: "SecTools" },
  { id: "siem_engineer", label: "SIEM Engineer", icon: "📊", category: "SecTools" },
  { id: "splunk_security", label: "Splunk Security", icon: "🟢", category: "SecTools" },
  { id: "qradar", label: "IBM QRadar", icon: "🔵", category: "SecTools" },
  { id: "sentinel", label: "Microsoft Sentinel", icon: "🔷", category: "SecTools" },
  { id: "elastic_security", label: "Elastic Security", icon: "🟡", category: "SecTools" },
  { id: "crowdstrike", label: "CrowdStrike", icon: "🔴", category: "SecTools" },
  { id: "sentinelone", label: "SentinelOne", icon: "🟣", category: "SecTools" },
  { id: "edr_xdr", label: "EDR / XDR", icon: "🛡️", category: "SecTools" },
  { id: "soar", label: "SOAR Engineer", icon: "🤖", category: "SecTools" },
  { id: "zscaler", label: "Zscaler", icon: "🔷", category: "SecTools" },
  { id: "proofpoint", label: "Proofpoint", icon: "🔵", category: "SecTools" },
  { id: "dlp", label: "DLP Engineer", icon: "🔐", category: "SecTools" },
  { id: "casb", label: "CASB Engineer", icon: "☁️", category: "SecTools" },
  { id: "endpoint_security", label: "Endpoint Security", icon: "💻", category: "SecTools" },
  { id: "email_security", label: "Email Security", icon: "📧", category: "SecTools" },
  { id: "web_security", label: "Web Security / WAF", icon: "🌐", category: "SecTools" },

  // ═══════════════════════════════════════════════════════════════
  // DATABASE
  // ═══════════════════════════════════════════════════════════════
  { id: "dba", label: "Database Administrator", icon: "🗄️", category: "Database" },
  { id: "oracle_dba", label: "Oracle DBA", icon: "🔴", category: "Database" },
  { id: "sql_server_dba", label: "SQL Server DBA", icon: "🔷", category: "Database" },
  { id: "mysql_dba", label: "MySQL DBA", icon: "🐬", category: "Database" },
  { id: "postgresql_dba", label: "PostgreSQL DBA", icon: "🐘", category: "Database" },
  { id: "mongodb_admin", label: "MongoDB Admin", icon: "🍃", category: "Database" },
  { id: "redis_admin", label: "Redis Admin", icon: "🔴", category: "Database" },
  { id: "cassandra", label: "Cassandra Admin", icon: "👁️", category: "Database" },
  { id: "elasticsearch", label: "Elasticsearch Admin", icon: "🟡", category: "Database" },
  { id: "dynamodb", label: "DynamoDB", icon: "🟠", category: "Database" },
  { id: "database_engineer", label: "Database Engineer", icon: "⚙️", category: "Database" },
  { id: "data_architect", label: "Data Architect", icon: "🏗️", category: "Database" },
  { id: "data_engineer", label: "Data Engineer", icon: "📊", category: "Database" },
  { id: "etl_developer", label: "ETL Developer", icon: "🔄", category: "Database" },
  { id: "data_warehouse", label: "Data Warehouse", icon: "🏢", category: "Database" },
  { id: "bi_analyst", label: "BI / Data Analyst", icon: "📈", category: "Database" },

  // ═══════════════════════════════════════════════════════════════
  // WEB & APPLICATION SERVERS
  // ═══════════════════════════════════════════════════════════════
  { id: "web_admin", label: "Web Administrator", icon: "🌐", category: "WebServers" },
  { id: "apache_admin", label: "Apache Admin", icon: "🪶", category: "WebServers" },
  { id: "nginx_admin", label: "Nginx Admin", icon: "🟢", category: "WebServers" },
  { id: "iis_admin", label: "IIS Administrator", icon: "🔵", category: "WebServers" },
  { id: "tomcat_admin", label: "Tomcat Admin", icon: "🐱", category: "WebServers" },
  { id: "weblogic_admin", label: "WebLogic Admin", icon: "🔴", category: "WebServers" },
  { id: "websphere_admin", label: "WebSphere Admin", icon: "🔵", category: "WebServers" },
  { id: "jboss_admin", label: "JBoss / WildFly", icon: "🔴", category: "WebServers" },
  { id: "middleware", label: "Middleware Admin", icon: "⚙️", category: "WebServers" },
  { id: "mq_admin", label: "MQ Administrator", icon: "📨", category: "WebServers" },
  { id: "kafka_admin", label: "Kafka Administrator", icon: "📊", category: "WebServers" },
  { id: "rabbitmq", label: "RabbitMQ Admin", icon: "🐰", category: "WebServers" },

  // ═══════════════════════════════════════════════════════════════
  // IT SUPPORT & OPERATIONS
  // ═══════════════════════════════════════════════════════════════
  { id: "it_support", label: "IT Support Specialist", icon: "🎧", category: "Support" },
  { id: "helpdesk", label: "Help Desk Technician", icon: "📞", category: "Support" },
  { id: "desktop_support", label: "Desktop Support", icon: "🖱️", category: "Support" },
  { id: "service_desk", label: "Service Desk Analyst", icon: "🎫", category: "Support" },
  { id: "it_technician", label: "IT Technician", icon: "🔧", category: "Support" },
  { id: "field_tech", label: "Field Technician", icon: "🚗", category: "Support" },
  { id: "deskside_support", label: "Deskside Support", icon: "🪑", category: "Support" },
  { id: "noc_engineer", label: "NOC Engineer", icon: "📊", category: "Support" },
  { id: "noc_technician", label: "NOC Technician", icon: "🖥️", category: "Support" },
  { id: "operations_engineer", label: "Operations Engineer", icon: "⚙️", category: "Support" },
  { id: "technical_support", label: "Technical Support Engineer", icon: "🛠️", category: "Support" },
  { id: "it_specialist", label: "IT Specialist", icon: "💼", category: "Support" },
  { id: "endpoint_tech", label: "Endpoint Technician", icon: "💻", category: "Support" },
  { id: "hardware_tech", label: "Hardware Technician", icon: "🔩", category: "Support" },
  { id: "av_tech", label: "AV / Multimedia Tech", icon: "🎬", category: "Support" },

  // ═══════════════════════════════════════════════════════════════
  // ITSM & TICKETING
  // ═══════════════════════════════════════════════════════════════
  { id: "itsm", label: "ITSM Administrator", icon: "🎫", category: "ITSM" },
  { id: "servicenow_admin", label: "ServiceNow Admin", icon: "🟢", category: "ITSM" },
  { id: "servicenow_dev", label: "ServiceNow Developer", icon: "💻", category: "ITSM" },
  { id: "jira_admin", label: "Jira Administrator", icon: "🔵", category: "ITSM" },
  { id: "zendesk_admin", label: "Zendesk Admin", icon: "🟢", category: "ITSM" },
  { id: "freshservice", label: "Freshservice Admin", icon: "🟢", category: "ITSM" },
  { id: "bmc_remedy", label: "BMC Remedy Admin", icon: "🔴", category: "ITSM" },
  { id: "cherwell", label: "Cherwell Admin", icon: "🔵", category: "ITSM" },
  { id: "itil_practitioner", label: "ITIL Practitioner", icon: "📋", category: "ITSM" },
  { id: "change_mgmt", label: "Change Management", icon: "🔄", category: "ITSM" },
  { id: "problem_mgmt", label: "Problem Management", icon: "❓", category: "ITSM" },
  { id: "incident_mgmt", label: "Incident Management", icon: "🚨", category: "ITSM" },
  { id: "asset_mgmt", label: "IT Asset Management", icon: "📦", category: "ITSM" },
  { id: "config_mgmt", label: "Configuration Management", icon: "⚙️", category: "ITSM" },

  // ═══════════════════════════════════════════════════════════════
  // IT MANAGEMENT & LEADERSHIP
  // ═══════════════════════════════════════════════════════════════
  { id: "it_manager", label: "IT Manager", icon: "👔", category: "Management" },
  { id: "infrastructure_manager", label: "Infrastructure Manager", icon: "🏗️", category: "Management" },
  { id: "network_manager", label: "Network Manager", icon: "🔀", category: "Management" },
  { id: "security_manager", label: "Security Manager", icon: "🔐", category: "Management" },
  { id: "operations_manager", label: "Operations Manager", icon: "⚙️", category: "Management" },
  { id: "it_director", label: "IT Director", icon: "🎯", category: "Management" },
  { id: "vp_it", label: "VP of IT", icon: "👑", category: "Management" },
  { id: "vp_infrastructure", label: "VP of Infrastructure", icon: "🏢", category: "Management" },
  { id: "vp_engineering", label: "VP of Engineering", icon: "⚙️", category: "Management" },
  { id: "cio", label: "CIO", icon: "👑", category: "Management" },
  { id: "cto", label: "CTO", icon: "👑", category: "Management" },
  { id: "ciso", label: "CISO", icon: "🔐", category: "Management" },
  { id: "it_officer", label: "IT Officer", icon: "🏛️", category: "Management" },
  { id: "team_lead", label: "Team Lead / Supervisor", icon: "👥", category: "Management" },
  { id: "technical_lead", label: "Technical Lead", icon: "🎯", category: "Management" },
  { id: "project_manager", label: "IT Project Manager", icon: "📅", category: "Management" },
  { id: "program_manager", label: "Program Manager", icon: "📊", category: "Management" },
  { id: "scrum_master", label: "Scrum Master", icon: "🔄", category: "Management" },
  { id: "agile_coach", label: "Agile Coach", icon: "🏃", category: "Management" },

  // ═══════════════════════════════════════════════════════════════
  // SOFTWARE DEVELOPMENT
  // ═══════════════════════════════════════════════════════════════
  { id: "software_engineer", label: "Software Engineer", icon: "💻", category: "Development" },
  { id: "software_developer", label: "Software Developer", icon: "👨‍💻", category: "Development" },
  { id: "fullstack", label: "Full Stack Developer", icon: "🌐", category: "Development" },
  { id: "backend", label: "Backend Developer", icon: "⚙️", category: "Development" },
  { id: "frontend", label: "Frontend Developer", icon: "🎨", category: "Development" },
  { id: "api_developer", label: "API Developer", icon: "🔌", category: "Development" },
  { id: "mobile_dev", label: "Mobile Developer", icon: "📱", category: "Development" },
  { id: "qa_engineer", label: "QA Engineer", icon: "✅", category: "Development" },
  { id: "sdet", label: "SDET", icon: "🧪", category: "Development" },
  { id: "automation_qa", label: "Automation QA", icon: "🤖", category: "Development" },
  { id: "solutions_architect", label: "Solutions Architect", icon: "🏗️", category: "Development" },
  { id: "tech_architect", label: "Technical Architect", icon: "📐", category: "Development" },
  { id: "enterprise_architect", label: "Enterprise Architect", icon: "🏢", category: "Development" },

  // ═══════════════════════════════════════════════════════════════
  // EMERGING & SPECIALIZED
  // ═══════════════════════════════════════════════════════════════
  { id: "ai_ml", label: "AI / ML Engineer", icon: "🧠", category: "Emerging" },
  { id: "mlops", label: "MLOps Engineer", icon: "⚙️", category: "Emerging" },
  { id: "data_scientist", label: "Data Scientist", icon: "📊", category: "Emerging" },
  { id: "iot", label: "IoT Engineer", icon: "📡", category: "Emerging" },
  { id: "iot_security", label: "IoT Security", icon: "🔒", category: "Emerging" },
  { id: "ot_security", label: "OT Security", icon: "🏭", category: "Emerging" },
  { id: "scada", label: "SCADA / ICS Engineer", icon: "🏭", category: "Emerging" },
  { id: "edge_computing", label: "Edge Computing", icon: "📶", category: "Emerging" },
  { id: "5g_engineer", label: "5G Engineer", icon: "📱", category: "Emerging" },
  { id: "blockchain", label: "Blockchain Engineer", icon: "🔗", category: "Emerging" },
  { id: "hpc", label: "HPC Engineer", icon: "🖥️", category: "Emerging" },
  { id: "gpu_computing", label: "GPU / CUDA Engineer", icon: "🎮", category: "Emerging" },
  { id: "quantum", label: "Quantum Computing", icon: "⚛️", category: "Emerging" },
  { id: "robotics", label: "Robotics Engineer", icon: "🤖", category: "Emerging" },
  { id: "ar_vr", label: "AR / VR Engineer", icon: "🥽", category: "Emerging" },
];

// ── Certifications (Massively Expanded) ──
export const certifications = [
  // Cisco
  { id: "ccna", label: "CCNA", category: "Cisco" },
  { id: "ccnp_enterprise", label: "CCNP Enterprise", category: "Cisco" },
  { id: "ccnp_security", label: "CCNP Security", category: "Cisco" },
  { id: "ccnp_datacenter", label: "CCNP Data Center", category: "Cisco" },
  { id: "ccnp_collab", label: "CCNP Collaboration", category: "Cisco" },
  { id: "ccnp_sp", label: "CCNP Service Provider", category: "Cisco" },
  { id: "ccie_enterprise", label: "CCIE Enterprise", category: "Cisco" },
  { id: "ccie_security", label: "CCIE Security", category: "Cisco" },
  { id: "ccie_datacenter", label: "CCIE Data Center", category: "Cisco" },
  { id: "devnet_associate", label: "DevNet Associate", category: "Cisco" },
  { id: "devnet_professional", label: "DevNet Professional", category: "Cisco" },
  { id: "cyberops", label: "CyberOps Associate", category: "Cisco" },
  
  // Juniper
  { id: "jncia", label: "JNCIA-Junos", category: "Juniper" },
  { id: "jncis", label: "JNCIS", category: "Juniper" },
  { id: "jncip", label: "JNCIP", category: "Juniper" },
  { id: "jncie", label: "JNCIE", category: "Juniper" },
  
  // CompTIA
  { id: "comptia_a", label: "CompTIA A+", category: "CompTIA" },
  { id: "comptia_net", label: "CompTIA Network+", category: "CompTIA" },
  { id: "comptia_sec", label: "CompTIA Security+", category: "CompTIA" },
  { id: "comptia_cysa", label: "CompTIA CySA+", category: "CompTIA" },
  { id: "comptia_pentest", label: "CompTIA PenTest+", category: "CompTIA" },
  { id: "comptia_casp", label: "CompTIA CASP+", category: "CompTIA" },
  { id: "comptia_linux", label: "CompTIA Linux+", category: "CompTIA" },
  { id: "comptia_server", label: "CompTIA Server+", category: "CompTIA" },
  { id: "comptia_cloud", label: "CompTIA Cloud+", category: "CompTIA" },
  { id: "comptia_data", label: "CompTIA Data+", category: "CompTIA" },
  { id: "comptia_project", label: "CompTIA Project+", category: "CompTIA" },
  
  // ISC2 Security
  { id: "cissp", label: "CISSP", category: "Security" },
  { id: "sscp", label: "SSCP", category: "Security" },
  { id: "ccsp", label: "CCSP", category: "Security" },
  { id: "cgrc", label: "CGRC", category: "Security" },
  
  // ISACA
  { id: "cism", label: "CISM", category: "Security" },
  { id: "cisa", label: "CISA", category: "Security" },
  { id: "crisc", label: "CRISC", category: "Security" },
  { id: "cdpse", label: "CDPSE", category: "Security" },
  
  // Offensive Security
  { id: "oscp", label: "OSCP", category: "PenTest" },
  { id: "osep", label: "OSEP", category: "PenTest" },
  { id: "oswe", label: "OSWE", category: "PenTest" },
  { id: "oswp", label: "OSWP", category: "PenTest" },
  { id: "osce3", label: "OSCE3", category: "PenTest" },
  
  // EC-Council
  { id: "ceh", label: "CEH", category: "PenTest" },
  { id: "cpent", label: "CPENT", category: "PenTest" },
  { id: "lpt", label: "LPT Master", category: "PenTest" },
  { id: "ecsa", label: "ECSA", category: "PenTest" },
  { id: "chfi", label: "CHFI", category: "Security" },
  
  // SANS/GIAC
  { id: "gsec", label: "GSEC", category: "GIAC" },
  { id: "gcih", label: "GCIH", category: "GIAC" },
  { id: "gcia", label: "GCIA", category: "GIAC" },
  { id: "gcfa", label: "GCFA", category: "GIAC" },
  { id: "gpen", label: "GPEN", category: "GIAC" },
  { id: "gwapt", label: "GWAPT", category: "GIAC" },
  { id: "gnfa", label: "GNFA", category: "GIAC" },
  { id: "gcfe", label: "GCFE", category: "GIAC" },
  { id: "grem", label: "GREM", category: "GIAC" },
  { id: "gxpn", label: "GXPN", category: "GIAC" },
  { id: "gmon", label: "GMON", category: "GIAC" },
  
  // AWS
  { id: "aws_ccp", label: "AWS Cloud Practitioner", category: "AWS" },
  { id: "aws_saa", label: "AWS Solutions Architect Associate", category: "AWS" },
  { id: "aws_sap", label: "AWS Solutions Architect Pro", category: "AWS" },
  { id: "aws_sysops", label: "AWS SysOps Administrator", category: "AWS" },
  { id: "aws_devops", label: "AWS DevOps Engineer Pro", category: "AWS" },
  { id: "aws_developer", label: "AWS Developer Associate", category: "AWS" },
  { id: "aws_security", label: "AWS Security Specialty", category: "AWS" },
  { id: "aws_networking", label: "AWS Networking Specialty", category: "AWS" },
  { id: "aws_database", label: "AWS Database Specialty", category: "AWS" },
  { id: "aws_ml", label: "AWS ML Specialty", category: "AWS" },
  
  // Azure
  { id: "az900", label: "AZ-900 Fundamentals", category: "Azure" },
  { id: "az104", label: "AZ-104 Administrator", category: "Azure" },
  { id: "az305", label: "AZ-305 Solutions Architect", category: "Azure" },
  { id: "az400", label: "AZ-400 DevOps Engineer", category: "Azure" },
  { id: "az500", label: "AZ-500 Security Engineer", category: "Azure" },
  { id: "az700", label: "AZ-700 Network Engineer", category: "Azure" },
  { id: "az204", label: "AZ-204 Developer", category: "Azure" },
  { id: "az140", label: "AZ-140 AVD Specialty", category: "Azure" },
  { id: "sc200", label: "SC-200 Security Operations", category: "Azure" },
  { id: "sc300", label: "SC-300 Identity Admin", category: "Azure" },
  { id: "ms500", label: "MS-500 Security Admin", category: "Azure" },
  
  // Google Cloud
  { id: "gcp_ace", label: "GCP Associate Cloud Engineer", category: "GCP" },
  { id: "gcp_pca", label: "GCP Professional Cloud Architect", category: "GCP" },
  { id: "gcp_pde", label: "GCP Data Engineer", category: "GCP" },
  { id: "gcp_pse", label: "GCP Security Engineer", category: "GCP" },
  { id: "gcp_devops", label: "GCP DevOps Engineer", category: "GCP" },
  { id: "gcp_network", label: "GCP Network Engineer", category: "GCP" },
  
  // Kubernetes & Containers
  { id: "cka", label: "CKA (Kubernetes Admin)", category: "Kubernetes" },
  { id: "ckad", label: "CKAD (App Developer)", category: "Kubernetes" },
  { id: "cks", label: "CKS (Security Specialist)", category: "Kubernetes" },
  { id: "kcna", label: "KCNA", category: "Kubernetes" },
  { id: "dca", label: "Docker Certified Associate", category: "Kubernetes" },
  
  // HashiCorp
  { id: "terraform_associate", label: "Terraform Associate", category: "HashiCorp" },
  { id: "vault_associate", label: "Vault Associate", category: "HashiCorp" },
  { id: "consul_associate", label: "Consul Associate", category: "HashiCorp" },
  
  // Linux
  { id: "rhcsa", label: "RHCSA", category: "Linux" },
  { id: "rhce", label: "RHCE", category: "Linux" },
  { id: "rhca", label: "RHCA", category: "Linux" },
  { id: "lpic1", label: "LPIC-1", category: "Linux" },
  { id: "lpic2", label: "LPIC-2", category: "Linux" },
  { id: "lpic3", label: "LPIC-3", category: "Linux" },
  { id: "lfcs", label: "LFCS", category: "Linux" },
  { id: "lfce", label: "LFCE", category: "Linux" },
  
  // VMware
  { id: "vcp_dcv", label: "VCP-DCV", category: "VMware" },
  { id: "vcap_dcv", label: "VCAP-DCV", category: "VMware" },
  { id: "vcp_nv", label: "VCP-NV (NSX)", category: "VMware" },
  { id: "vcap_nv", label: "VCAP-NV", category: "VMware" },
  { id: "vcdx", label: "VCDX", category: "VMware" },
  
  // Microsoft
  { id: "mcsa", label: "MCSA", category: "Microsoft" },
  { id: "mcse", label: "MCSE", category: "Microsoft" },
  { id: "mct", label: "MCT", category: "Microsoft" },
  { id: "md100", label: "MD-100 Windows Client", category: "Microsoft" },
  { id: "md101", label: "MD-101 Endpoint Admin", category: "Microsoft" },
  { id: "ms100", label: "MS-100 M365 Identity", category: "Microsoft" },
  { id: "ms101", label: "MS-101 M365 Mobility", category: "Microsoft" },
  { id: "ms700", label: "MS-700 Teams Admin", category: "Microsoft" },
  
  // Vendor Security
  { id: "pcnsa", label: "Palo Alto PCNSA", category: "Vendor" },
  { id: "pcnse", label: "Palo Alto PCNSE", category: "Vendor" },
  { id: "pccse", label: "Palo Alto PCCSE", category: "Vendor" },
  { id: "fortinet_nse4", label: "Fortinet NSE4", category: "Vendor" },
  { id: "fortinet_nse5", label: "Fortinet NSE5", category: "Vendor" },
  { id: "fortinet_nse7", label: "Fortinet NSE7", category: "Vendor" },
  { id: "fortinet_nse8", label: "Fortinet NSE8", category: "Vendor" },
  { id: "checkpoint_ccsa", label: "Check Point CCSA", category: "Vendor" },
  { id: "checkpoint_ccse", label: "Check Point CCSE", category: "Vendor" },
  { id: "crowdstrike_ccfa", label: "CrowdStrike CCFA", category: "Vendor" },
  { id: "splunk_core", label: "Splunk Core Certified", category: "Vendor" },
  { id: "splunk_admin", label: "Splunk Admin", category: "Vendor" },
  { id: "splunk_architect", label: "Splunk Architect", category: "Vendor" },
  { id: "servicenow_csa", label: "ServiceNow CSA", category: "Vendor" },
  { id: "servicenow_cad", label: "ServiceNow CAD", category: "Vendor" },
  
  // Storage
  { id: "netapp_ncda", label: "NetApp NCDA", category: "Storage" },
  { id: "netapp_ncde", label: "NetApp NCDE", category: "Storage" },
  { id: "dell_emc", label: "Dell EMC Proven", category: "Storage" },
  { id: "pure_storage", label: "Pure Storage Certified", category: "Storage" },
  
  // Backup
  { id: "veeam_vmce", label: "Veeam VMCE", category: "Backup" },
  { id: "veeam_vmca", label: "Veeam VMCA", category: "Backup" },
  { id: "commvault", label: "Commvault Certified", category: "Backup" },
  
  // Project Management
  { id: "pmp", label: "PMP", category: "PM" },
  { id: "prince2", label: "PRINCE2", category: "PM" },
  { id: "capm", label: "CAPM", category: "PM" },
  { id: "csm", label: "CSM (Scrum Master)", category: "PM" },
  { id: "psm", label: "PSM (Scrum.org)", category: "PM" },
  { id: "safe", label: "SAFe Certified", category: "PM" },
  { id: "itil_foundation", label: "ITIL Foundation", category: "PM" },
  { id: "itil_mp", label: "ITIL Managing Pro", category: "PM" },
  { id: "cobit", label: "COBIT", category: "PM" },
  { id: "togaf", label: "TOGAF", category: "PM" },
];

// ── Work Arrangements ──
export const workArrangements = [
  { id: "remote", label: "Remote" },
  { id: "hybrid", label: "Hybrid" },
  { id: "onsite", label: "On-site" },
  { id: "contract", label: "Contract" },
  { id: "fulltime", label: "Full-time" },
  { id: "parttime", label: "Part-time" },
  { id: "freelance", label: "Freelance" },
  { id: "internship", label: "Internship" },
  { id: "temp", label: "Temporary" },
  { id: "c2c", label: "Corp-to-Corp (C2C)" },
  { id: "w2", label: "W2 Only" },
  { id: "clearance", label: "Security Clearance" },
];

// ── Vendors / Technologies (Massively Expanded) ──
export const vendors = [
  // Networking
  { id: "cisco", label: "Cisco", category: "Network" },
  { id: "juniper", label: "Juniper", category: "Network" },
  { id: "arista", label: "Arista", category: "Network" },
  { id: "paloalto_net", label: "Palo Alto Networks", category: "Network" },
  { id: "fortinet_net", label: "Fortinet", category: "Network" },
  { id: "f5", label: "F5 Networks", category: "Network" },
  { id: "citrix_net", label: "Citrix ADC", category: "Network" },
  { id: "meraki", label: "Cisco Meraki", category: "Network" },
  { id: "aruba", label: "Aruba / HPE", category: "Network" },
  { id: "ubiquiti", label: "Ubiquiti", category: "Network" },
  { id: "extreme", label: "Extreme Networks", category: "Network" },
  { id: "ruckus", label: "Ruckus / CommScope", category: "Network" },
  { id: "silverpeak", label: "Silver Peak / Aruba", category: "Network" },
  { id: "velocloud", label: "VMware VeloCloud", category: "Network" },
  { id: "viptela", label: "Cisco Viptela", category: "Network" },
  { id: "infoblox", label: "Infoblox", category: "Network" },
  { id: "bluecat", label: "BlueCat", category: "Network" },
  
  // Security Vendors
  { id: "paloalto", label: "Palo Alto", category: "Security" },
  { id: "fortinet", label: "Fortinet", category: "Security" },
  { id: "checkpoint", label: "Check Point", category: "Security" },
  { id: "cisco_security", label: "Cisco Security", category: "Security" },
  { id: "crowdstrike", label: "CrowdStrike", category: "Security" },
  { id: "sentinelone", label: "SentinelOne", category: "Security" },
  { id: "carbonblack", label: "Carbon Black", category: "Security" },
  { id: "cybereason", label: "Cybereason", category: "Security" },
  { id: "trellix", label: "Trellix (McAfee/FireEye)", category: "Security" },
  { id: "symantec", label: "Symantec / Broadcom", category: "Security" },
  { id: "trendmicro", label: "Trend Micro", category: "Security" },
  { id: "sophos", label: "Sophos", category: "Security" },
  { id: "zscaler", label: "Zscaler", category: "Security" },
  { id: "netskope", label: "Netskope", category: "Security" },
  { id: "proofpoint", label: "Proofpoint", category: "Security" },
  { id: "mimecast", label: "Mimecast", category: "Security" },
  { id: "okta", label: "Okta", category: "Security" },
  { id: "ping_identity", label: "Ping Identity", category: "Security" },
  { id: "cyberark", label: "CyberArk", category: "Security" },
  { id: "beyondtrust", label: "BeyondTrust", category: "Security" },
  { id: "sailpoint", label: "SailPoint", category: "Security" },
  { id: "saviynt", label: "Saviynt", category: "Security" },
  { id: "qualys", label: "Qualys", category: "Security" },
  { id: "tenable", label: "Tenable / Nessus", category: "Security" },
  { id: "rapid7", label: "Rapid7", category: "Security" },
  { id: "snyk", label: "Snyk", category: "Security" },
  { id: "veracode", label: "Veracode", category: "Security" },
  { id: "checkmarx", label: "Checkmarx", category: "Security" },
  { id: "burpsuite", label: "Burp Suite", category: "Security" },
  { id: "metasploit", label: "Metasploit", category: "Security" },
  { id: "cobalt_strike", label: "Cobalt Strike", category: "Security" },
  { id: "kali", label: "Kali Linux", category: "Security" },
  
  // SIEM & Monitoring
  { id: "splunk", label: "Splunk", category: "SIEM" },
  { id: "qradar", label: "IBM QRadar", category: "SIEM" },
  { id: "sentinel", label: "Microsoft Sentinel", category: "SIEM" },
  { id: "elastic", label: "Elastic / ELK Stack", category: "SIEM" },
  { id: "logrhythm", label: "LogRhythm", category: "SIEM" },
  { id: "arcsight", label: "ArcSight", category: "SIEM" },
  { id: "sumo_logic", label: "Sumo Logic", category: "SIEM" },
  { id: "exabeam", label: "Exabeam", category: "SIEM" },
  { id: "securonix", label: "Securonix", category: "SIEM" },
  { id: "devo", label: "Devo", category: "SIEM" },
  { id: "graylog", label: "Graylog", category: "SIEM" },
  { id: "chronicle", label: "Google Chronicle", category: "SIEM" },
  
  // SOAR
  { id: "splunk_soar", label: "Splunk SOAR", category: "SOAR" },
  { id: "palo_xsoar", label: "Palo Alto XSOAR", category: "SOAR" },
  { id: "swimlane", label: "Swimlane", category: "SOAR" },
  { id: "tines", label: "Tines", category: "SOAR" },
  { id: "shuffle", label: "Shuffle SOAR", category: "SOAR" },
  
  // Monitoring
  { id: "datadog", label: "Datadog", category: "Monitoring" },
  { id: "newrelic", label: "New Relic", category: "Monitoring" },
  { id: "dynatrace", label: "Dynatrace", category: "Monitoring" },
  { id: "appdynamics", label: "AppDynamics", category: "Monitoring" },
  { id: "prometheus", label: "Prometheus", category: "Monitoring" },
  { id: "grafana", label: "Grafana", category: "Monitoring" },
  { id: "nagios", label: "Nagios", category: "Monitoring" },
  { id: "zabbix", label: "Zabbix", category: "Monitoring" },
  { id: "prtg", label: "PRTG", category: "Monitoring" },
  { id: "solarwinds", label: "SolarWinds", category: "Monitoring" },
  { id: "thousandeyes", label: "ThousandEyes", category: "Monitoring" },
  { id: "catchpoint", label: "Catchpoint", category: "Monitoring" },
  { id: "pagerduty", label: "PagerDuty", category: "Monitoring" },
  { id: "opsgenie", label: "OpsGenie", category: "Monitoring" },
  { id: "victorops", label: "VictorOps", category: "Monitoring" },
  
  // Cloud
  { id: "aws", label: "AWS", category: "Cloud" },
  { id: "azure", label: "Microsoft Azure", category: "Cloud" },
  { id: "gcp", label: "Google Cloud", category: "Cloud" },
  { id: "oracle_cloud", label: "Oracle Cloud", category: "Cloud" },
  { id: "ibm_cloud", label: "IBM Cloud", category: "Cloud" },
  { id: "digitalocean", label: "DigitalOcean", category: "Cloud" },
  { id: "linode", label: "Linode", category: "Cloud" },
  { id: "vultr", label: "Vultr", category: "Cloud" },
  
  // Virtualization
  { id: "vmware", label: "VMware", category: "Virtualization" },
  { id: "vmware_nsx", label: "VMware NSX", category: "Virtualization" },
  { id: "vmware_vsan", label: "VMware vSAN", category: "Virtualization" },
  { id: "vmware_horizon", label: "VMware Horizon", category: "Virtualization" },
  { id: "hyperv", label: "Hyper-V", category: "Virtualization" },
  { id: "citrix", label: "Citrix", category: "Virtualization" },
  { id: "nutanix", label: "Nutanix", category: "Virtualization" },
  { id: "proxmox", label: "Proxmox", category: "Virtualization" },
  { id: "openstack", label: "OpenStack", category: "Virtualization" },
  { id: "kvm", label: "KVM", category: "Virtualization" },
  
  // Containers & Orchestration
  { id: "kubernetes", label: "Kubernetes", category: "Containers" },
  { id: "docker", label: "Docker", category: "Containers" },
  { id: "openshift", label: "OpenShift", category: "Containers" },
  { id: "rancher", label: "Rancher", category: "Containers" },
  { id: "istio", label: "Istio", category: "Containers" },
  { id: "linkerd", label: "Linkerd", category: "Containers" },
  { id: "helm", label: "Helm", category: "Containers" },
  { id: "podman", label: "Podman", category: "Containers" },
  { id: "containerd", label: "containerd", category: "Containers" },
  
  // IaC & Automation
  { id: "terraform", label: "Terraform", category: "Automation" },
  { id: "ansible", label: "Ansible", category: "Automation" },
  { id: "puppet", label: "Puppet", category: "Automation" },
  { id: "chef", label: "Chef", category: "Automation" },
  { id: "saltstack", label: "SaltStack", category: "Automation" },
  { id: "pulumi", label: "Pulumi", category: "Automation" },
  { id: "cloudformation", label: "CloudFormation", category: "Automation" },
  { id: "arm_bicep", label: "ARM / Bicep", category: "Automation" },
  { id: "crossplane", label: "Crossplane", category: "Automation" },
  
  // CI/CD
  { id: "jenkins", label: "Jenkins", category: "CICD" },
  { id: "gitlab", label: "GitLab", category: "CICD" },
  { id: "github", label: "GitHub / Actions", category: "CICD" },
  { id: "azure_devops", label: "Azure DevOps", category: "CICD" },
  { id: "circleci", label: "CircleCI", category: "CICD" },
  { id: "travis", label: "Travis CI", category: "CICD" },
  { id: "bamboo", label: "Bamboo", category: "CICD" },
  { id: "teamcity", label: "TeamCity", category: "CICD" },
  { id: "argocd", label: "ArgoCD", category: "CICD" },
  { id: "flux", label: "Flux", category: "CICD" },
  { id: "spinnaker", label: "Spinnaker", category: "CICD" },
  { id: "harness", label: "Harness", category: "CICD" },
  { id: "octopus", label: "Octopus Deploy", category: "CICD" },
  
  // Programming
  { id: "python", label: "Python", category: "Programming" },
  { id: "powershell", label: "PowerShell", category: "Programming" },
  { id: "bash", label: "Bash / Shell", category: "Programming" },
  { id: "go", label: "Go / Golang", category: "Programming" },
  { id: "rust", label: "Rust", category: "Programming" },
  { id: "javascript", label: "JavaScript", category: "Programming" },
  { id: "typescript", label: "TypeScript", category: "Programming" },
  { id: "java", label: "Java", category: "Programming" },
  { id: "csharp", label: "C#", category: "Programming" },
  { id: "ruby", label: "Ruby", category: "Programming" },
  { id: "perl", label: "Perl", category: "Programming" },
  
  // Databases
  { id: "oracle", label: "Oracle", category: "Database" },
  { id: "sqlserver", label: "SQL Server", category: "Database" },
  { id: "mysql", label: "MySQL", category: "Database" },
  { id: "postgresql", label: "PostgreSQL", category: "Database" },
  { id: "mongodb", label: "MongoDB", category: "Database" },
  { id: "redis", label: "Redis", category: "Database" },
  { id: "cassandra", label: "Cassandra", category: "Database" },
  { id: "elasticsearch_db", label: "Elasticsearch", category: "Database" },
  { id: "dynamodb", label: "DynamoDB", category: "Database" },
  { id: "cosmosdb", label: "Cosmos DB", category: "Database" },
  { id: "snowflake", label: "Snowflake", category: "Database" },
  { id: "databricks", label: "Databricks", category: "Database" },
  
  // Microsoft
  { id: "windows_server", label: "Windows Server", category: "Microsoft" },
  { id: "active_directory", label: "Active Directory", category: "Microsoft" },
  { id: "azure_ad", label: "Azure AD / Entra", category: "Microsoft" },
  { id: "exchange", label: "Exchange", category: "Microsoft" },
  { id: "office365", label: "Microsoft 365", category: "Microsoft" },
  { id: "sharepoint", label: "SharePoint", category: "Microsoft" },
  { id: "teams", label: "Microsoft Teams", category: "Microsoft" },
  { id: "intune", label: "Intune", category: "Microsoft" },
  { id: "sccm", label: "SCCM / MECM", category: "Microsoft" },
  { id: "scom", label: "SCOM", category: "Microsoft" },
  
  // Linux
  { id: "rhel", label: "RHEL / CentOS", category: "Linux" },
  { id: "ubuntu", label: "Ubuntu", category: "Linux" },
  { id: "debian", label: "Debian", category: "Linux" },
  { id: "suse", label: "SUSE / openSUSE", category: "Linux" },
  { id: "amazon_linux", label: "Amazon Linux", category: "Linux" },
  { id: "rocky", label: "Rocky Linux", category: "Linux" },
  { id: "alma", label: "AlmaLinux", category: "Linux" },
  
  // Storage
  { id: "netapp", label: "NetApp", category: "Storage" },
  { id: "dell_emc", label: "Dell EMC", category: "Storage" },
  { id: "pure_storage", label: "Pure Storage", category: "Storage" },
  { id: "hpe_storage", label: "HPE Storage", category: "Storage" },
  { id: "ibm_storage", label: "IBM Storage", category: "Storage" },
  { id: "hitachi", label: "Hitachi Vantara", category: "Storage" },
  { id: "qnap", label: "QNAP", category: "Storage" },
  { id: "synology", label: "Synology", category: "Storage" },
  
  // Backup
  { id: "veeam", label: "Veeam", category: "Backup" },
  { id: "commvault", label: "Commvault", category: "Backup" },
  { id: "veritas", label: "Veritas NetBackup", category: "Backup" },
  { id: "rubrik", label: "Rubrik", category: "Backup" },
  { id: "cohesity", label: "Cohesity", category: "Backup" },
  { id: "acronis", label: "Acronis", category: "Backup" },
  { id: "datto", label: "Datto", category: "Backup" },
  { id: "zerto", label: "Zerto", category: "Backup" },
  
  // ITSM
  { id: "servicenow", label: "ServiceNow", category: "ITSM" },
  { id: "jira", label: "Jira", category: "ITSM" },
  { id: "confluence", label: "Confluence", category: "ITSM" },
  { id: "zendesk", label: "Zendesk", category: "ITSM" },
  { id: "freshservice", label: "Freshservice", category: "ITSM" },
  { id: "bmc_remedy", label: "BMC Remedy", category: "ITSM" },
  { id: "cherwell", label: "Cherwell", category: "ITSM" },
  { id: "ivanti", label: "Ivanti", category: "ITSM" },
];

// ── Job Platforms ──
// ── Job Platforms (Massively Expanded) ──
export interface JobPlatform {
  id: string;
  label: string;
  url: string;
  category: string;
  description?: string;
}

export const platforms: JobPlatform[] = [
  // ═══════════════════════════════════════════════════════════════
  // GENERAL JOB BOARDS
  // ═══════════════════════════════════════════════════════════════
  { id: "linkedin", label: "LinkedIn Jobs", url: "https://linkedin.com/jobs", category: "General", description: "World's largest professional network" },
  { id: "indeed", label: "Indeed", url: "https://indeed.com", category: "General", description: "#1 job site worldwide" },
  { id: "glassdoor", label: "Glassdoor", url: "https://glassdoor.com", category: "General", description: "Jobs + company reviews & salaries" },
  { id: "monster", label: "Monster", url: "https://monster.com", category: "General", description: "Classic job board" },
  { id: "ziprecruiter", label: "ZipRecruiter", url: "https://ziprecruiter.com", category: "General", description: "AI-powered job matching" },
  { id: "careerbuilder", label: "CareerBuilder", url: "https://careerbuilder.com", category: "General", description: "Jobs & career resources" },
  { id: "simplyhired", label: "SimplyHired", url: "https://simplyhired.com", category: "General", description: "Job search engine" },
  { id: "usajobs", label: "USAJobs", url: "https://usajobs.gov", category: "General", description: "US Government jobs" },
  { id: "snagajob", label: "Snagajob", url: "https://snagajob.com", category: "General", description: "Hourly work marketplace" },
  { id: "jooble", label: "Jooble", url: "https://jooble.org", category: "General", description: "International job aggregator" },
  { id: "adzuna", label: "Adzuna", url: "https://adzuna.com", category: "General", description: "Smart job search" },
  { id: "joblist", label: "Joblist", url: "https://joblist.com", category: "General", description: "Personalized job search" },
  { id: "ladders", label: "The Ladders", url: "https://theladders.com", category: "General", description: "$100K+ jobs" },
  { id: "getwork", label: "Getwork", url: "https://getwork.com", category: "General", description: "Direct employer jobs" },
  { id: "talent", label: "Talent.com", url: "https://talent.com", category: "General", description: "Global job aggregator" },

  // ═══════════════════════════════════════════════════════════════
  // TECH & IT SPECIFIC
  // ═══════════════════════════════════════════════════════════════
  { id: "dice", label: "Dice", url: "https://dice.com", category: "Tech", description: "Tech-focused job board" },
  { id: "stackoverflow", label: "Stack Overflow Jobs", url: "https://stackoverflow.com/jobs", category: "Tech", description: "Developer community jobs" },
  { id: "github_jobs", label: "GitHub Jobs", url: "https://jobs.github.com", category: "Tech", description: "Developer jobs" },
  { id: "builtin", label: "Built In", url: "https://builtin.com", category: "Tech", description: "Startup & tech jobs" },
  { id: "techcareers", label: "TechCareers", url: "https://techcareers.com", category: "Tech", description: "IT & engineering jobs" },
  { id: "hired", label: "Hired", url: "https://hired.com", category: "Tech", description: "Tech talent marketplace" },
  { id: "triplebyte", label: "Triplebyte", url: "https://triplebyte.com", category: "Tech", description: "Skills-based hiring" },
  { id: "angel", label: "AngelList / Wellfound", url: "https://wellfound.com", category: "Tech", description: "Startup jobs" },
  { id: "ycombinator", label: "Y Combinator Jobs", url: "https://ycombinator.com/jobs", category: "Tech", description: "YC startup jobs" },
  { id: "whoishiring", label: "Who Is Hiring", url: "https://whoishiring.io", category: "Tech", description: "HN hiring aggregator" },
  { id: "levels_fyi", label: "Levels.fyi Jobs", url: "https://levels.fyi/jobs", category: "Tech", description: "Tech jobs + comp data" },
  { id: "techjobsforgood", label: "Tech Jobs For Good", url: "https://techjobsforgood.com", category: "Tech", description: "Mission-driven tech" },
  { id: "underdog", label: "Underdog.io", url: "https://underdog.io", category: "Tech", description: "Curated startup jobs" },
  { id: "climatebase", label: "Climatebase", url: "https://climatebase.org", category: "Tech", description: "Climate tech jobs" },
  { id: "techinasia", label: "Tech in Asia Jobs", url: "https://techinasia.com/jobs", category: "Tech", description: "Asia tech jobs" },

  // ═══════════════════════════════════════════════════════════════
  // CYBERSECURITY SPECIFIC
  // ═══════════════════════════════════════════════════════════════
  { id: "cyberseek", label: "CyberSeek", url: "https://cyberseek.org", category: "Security", description: "Cybersecurity career tool" },
  { id: "cybersecjobs", label: "CyberSecJobs", url: "https://cybersecjobs.com", category: "Security", description: "Security-focused jobs" },
  { id: "infosecjobs", label: "InfoSec Jobs", url: "https://infosec-jobs.com", category: "Security", description: "Information security jobs" },
  { id: "cybersecurity_jobs", label: "Cybersecurity Jobs", url: "https://cybersecurity-jobs.com", category: "Security", description: "Security careers" },
  { id: "isaca_jobs", label: "ISACA Job Board", url: "https://jobs.isaca.org", category: "Security", description: "ISACA member jobs" },
  { id: "isc2_jobs", label: "ISC2 Career Center", url: "https://isc2.org/career-center", category: "Security", description: "ISC2 member jobs" },
  { id: "sans_jobs", label: "SANS Job Board", url: "https://sans.org/cyber-security-jobs", category: "Security", description: "SANS community jobs" },

  // ═══════════════════════════════════════════════════════════════
  // GOVERNMENT & CLEARANCE
  // ═══════════════════════════════════════════════════════════════
  { id: "clearancejobs", label: "ClearanceJobs", url: "https://clearancejobs.com", category: "Government", description: "Security clearance jobs" },
  { id: "cleared_careers", label: "Cleared Careers", url: "https://clearedcareers.com", category: "Government", description: "Cleared professionals" },
  { id: "intelligencecareers", label: "IntelligenceCareers", url: "https://intelligencecareers.com", category: "Government", description: "Intel community jobs" },
  { id: "governmentjobs", label: "GovernmentJobs", url: "https://governmentjobs.com", category: "Government", description: "Public sector jobs" },
  { id: "fedshirevets", label: "Feds Hire Vets", url: "https://fedshirevets.gov", category: "Government", description: "Federal veteran jobs" },
  { id: "militaryhire", label: "Military.com", url: "https://military.com/veteran-jobs", category: "Government", description: "Veteran job board" },

  // ═══════════════════════════════════════════════════════════════
  // REMOTE JOB BOARDS
  // ═══════════════════════════════════════════════════════════════
  { id: "weworkremotely", label: "We Work Remotely", url: "https://weworkremotely.com", category: "Remote", description: "Largest remote jobs board" },
  { id: "remote_ok", label: "RemoteOK", url: "https://remoteok.com", category: "Remote", description: "Remote jobs aggregator" },
  { id: "flexjobs", label: "FlexJobs", url: "https://flexjobs.com", category: "Remote", description: "Vetted remote & flex jobs" },
  { id: "remote_co", label: "Remote.co", url: "https://remote.co", category: "Remote", description: "Remote company jobs" },
  { id: "justremote", label: "JustRemote", url: "https://justremote.co", category: "Remote", description: "Remote opportunities" },
  { id: "remotive", label: "Remotive", url: "https://remotive.com", category: "Remote", description: "Remote tech jobs" },
  { id: "remoteleaf", label: "RemoteLeaf", url: "https://remoteleaf.com", category: "Remote", description: "Hand-picked remote jobs" },
  { id: "workingnomads", label: "Working Nomads", url: "https://workingnomads.com", category: "Remote", description: "Digital nomad jobs" },
  { id: "nodesk", label: "NoDesk", url: "https://nodesk.co", category: "Remote", description: "Remote work resources" },
  { id: "remoters", label: "Remoters", url: "https://remoters.net", category: "Remote", description: "Remote jobs & resources" },
  { id: "pangian", label: "Pangian", url: "https://pangian.com", category: "Remote", description: "Global remote community" },
  { id: "dailyremote", label: "DailyRemote", url: "https://dailyremote.com", category: "Remote", description: "Daily remote job posts" },
  { id: "himalayas", label: "Himalayas", url: "https://himalayas.app", category: "Remote", description: "Remote company database" },
  { id: "remotehub", label: "RemoteHub", url: "https://remotehub.com", category: "Remote", description: "Remote jobs & companies" },
  { id: "remoteworker", label: "Remote Worker", url: "https://remote.worker.com", category: "Remote", description: "UK remote jobs" },
  { id: "jobspresso", label: "Jobspresso", url: "https://jobspresso.co", category: "Remote", description: "Curated remote jobs" },
  { id: "virtualvocations", label: "Virtual Vocations", url: "https://virtualvocations.com", category: "Remote", description: "Telecommute jobs" },
  { id: "skip_the_drive", label: "Skip The Drive", url: "https://skipthedrive.com", category: "Remote", description: "Remote & work from home" },
  { id: "remotejobs_io", label: "Remote Jobs", url: "https://remotejobs.io", category: "Remote", description: "Remote opportunities" },
  { id: "letsworkremotely", label: "Let's Work Remotely", url: "https://letsworkremotely.com", category: "Remote", description: "Remote job listings" },
  { id: "remote_tech_jobs", label: "Remote Tech Jobs", url: "https://remotetechjobs.com", category: "Remote", description: "Tech remote positions" },
  { id: "outsourcely", label: "Outsourcely", url: "https://outsourcely.com", category: "Remote", description: "Remote startup jobs" },
  { id: "arc_dev", label: "Arc.dev", url: "https://arc.dev", category: "Remote", description: "Remote developer jobs" },
  { id: "dynamite_jobs", label: "Dynamite Jobs", url: "https://dynamitejobs.com", category: "Remote", description: "Remote-first companies" },
  { id: "europa_remotely", label: "EuropeRemotely", url: "https://europeremotely.com", category: "Remote", description: "European remote jobs" },
  { id: "remote4me", label: "Remote4Me", url: "https://remote4me.com", category: "Remote", description: "Remote job search" },
  { id: "authentic_jobs", label: "Authentic Jobs", url: "https://authenticjobs.com", category: "Remote", description: "Design & dev remote" },

  // ═══════════════════════════════════════════════════════════════
  // FREELANCE & CONTRACT
  // ═══════════════════════════════════════════════════════════════
  { id: "upwork", label: "Upwork", url: "https://upwork.com", category: "Freelance", description: "Freelance marketplace" },
  { id: "fiverr", label: "Fiverr", url: "https://fiverr.com", category: "Freelance", description: "Freelance services" },
  { id: "toptal", label: "Toptal", url: "https://toptal.com", category: "Freelance", description: "Top 3% freelancers" },
  { id: "freelancer", label: "Freelancer.com", url: "https://freelancer.com", category: "Freelance", description: "Global freelance site" },
  { id: "guru", label: "Guru", url: "https://guru.com", category: "Freelance", description: "Freelance marketplace" },
  { id: "peopleperhour", label: "PeoplePerHour", url: "https://peopleperhour.com", category: "Freelance", description: "Freelance projects" },
  { id: "contra", label: "Contra", url: "https://contra.com", category: "Freelance", description: "Independent work" },
  { id: "braintrust", label: "Braintrust", url: "https://usebraintrust.com", category: "Freelance", description: "Decentralized talent" },
  { id: "turing", label: "Turing", url: "https://turing.com", category: "Freelance", description: "Remote developer jobs" },
  { id: "gun_io", label: "Gun.io", url: "https://gun.io", category: "Freelance", description: "Freelance developers" },
  { id: "x_team", label: "X-Team", url: "https://x-team.com", category: "Freelance", description: "Developer community" },
  { id: "a_team", label: "A.Team", url: "https://a.team", category: "Freelance", description: "Team formation" },

  // ═══════════════════════════════════════════════════════════════
  // DEVOPS & CLOUD SPECIFIC
  // ═══════════════════════════════════════════════════════════════
  { id: "devopsjobs", label: "DevOps Jobs", url: "https://devopsjobs.io", category: "DevOps", description: "DevOps-focused" },
  { id: "kubernetes_jobs", label: "Kube Careers", url: "https://kube.careers", category: "DevOps", description: "Kubernetes jobs" },
  { id: "aws_jobs", label: "AWS Jobs", url: "https://amazon.jobs/aws", category: "DevOps", description: "Amazon AWS careers" },
  { id: "cloud_careers", label: "Cloud Careers", url: "https://cloudcareers.io", category: "DevOps", description: "Cloud-focused jobs" },

  // ═══════════════════════════════════════════════════════════════
  // INTERNATIONAL / REGIONAL
  // ═══════════════════════════════════════════════════════════════
  { id: "seek", label: "Seek", url: "https://seek.com.au", category: "International", description: "Australia & NZ" },
  { id: "reed", label: "Reed", url: "https://reed.co.uk", category: "International", description: "UK jobs" },
  { id: "totaljobs", label: "Totaljobs", url: "https://totaljobs.com", category: "International", description: "UK job board" },
  { id: "cv_library", label: "CV-Library", url: "https://cv-library.co.uk", category: "International", description: "UK jobs" },
  { id: "cwjobs", label: "CWJobs", url: "https://cwjobs.co.uk", category: "International", description: "UK IT jobs" },
  { id: "jobsite", label: "Jobsite", url: "https://jobsite.co.uk", category: "International", description: "UK job search" },
  { id: "stepstone", label: "StepStone", url: "https://stepstone.de", category: "International", description: "Germany" },
  { id: "xing", label: "XING Jobs", url: "https://xing.com/jobs", category: "International", description: "DACH region" },
  { id: "naukri", label: "Naukri", url: "https://naukri.com", category: "International", description: "India jobs" },
  { id: "foundit", label: "Foundit (Monster India)", url: "https://foundit.in", category: "International", description: "India jobs" },
  { id: "shine", label: "Shine", url: "https://shine.com", category: "International", description: "India careers" },
  { id: "instahyre", label: "Instahyre", url: "https://instahyre.com", category: "International", description: "India tech jobs" },
  { id: "hirist", label: "Hirist", url: "https://hirist.tech", category: "International", description: "India IT jobs" },
  { id: "cutshort", label: "CutShort", url: "https://cutshort.io", category: "International", description: "India startups" },
  { id: "jobstreet", label: "JobStreet", url: "https://jobstreet.com", category: "International", description: "Southeast Asia" },
  { id: "jobsdb", label: "JobsDB", url: "https://jobsdb.com", category: "International", description: "Asia Pacific" },
  { id: "bayt", label: "Bayt", url: "https://bayt.com", category: "International", description: "Middle East" },
  { id: "gulftalent", label: "GulfTalent", url: "https://gulftalent.com", category: "International", description: "Gulf region" },
  { id: "wuzzuf", label: "Wuzzuf", url: "https://wuzzuf.net", category: "International", description: "Egypt & MENA" },
  { id: "rozee", label: "Rozee.pk", url: "https://rozee.pk", category: "International", description: "Pakistan jobs" },
  { id: "bdjobs", label: "BDJobs", url: "https://bdjobs.com", category: "International", description: "Bangladesh jobs" },
  { id: "jobberman", label: "Jobberman", url: "https://jobberman.com", category: "International", description: "Africa jobs" },
  { id: "careers24", label: "Careers24", url: "https://careers24.com", category: "International", description: "South Africa" },
  { id: "pnet", label: "PNet", url: "https://pnet.co.za", category: "International", description: "South Africa" },
  { id: "catho", label: "Catho", url: "https://catho.com.br", category: "International", description: "Brazil" },
  { id: "computrabajo", label: "Computrabajo", url: "https://computrabajo.com", category: "International", description: "Latin America" },
  { id: "bumeran", label: "Bumeran", url: "https://bumeran.com", category: "International", description: "Latin America" },
  { id: "hh_ru", label: "HeadHunter", url: "https://hh.ru", category: "International", description: "Russia & CIS" },
  { id: "rabota", label: "Rabota.ua", url: "https://rabota.ua", category: "International", description: "Ukraine" },
  { id: "pracuj", label: "Pracuj.pl", url: "https://pracuj.pl", category: "International", description: "Poland" },
  { id: "jobs_ie", label: "Jobs.ie", url: "https://jobs.ie", category: "International", description: "Ireland" },
  { id: "irishjobs", label: "IrishJobs", url: "https://irishjobs.ie", category: "International", description: "Ireland" },
  { id: "nijobs", label: "NIJobs", url: "https://nijobs.com", category: "International", description: "Northern Ireland" },
  { id: "jobs_ch", label: "Jobs.ch", url: "https://jobs.ch", category: "International", description: "Switzerland" },
  { id: "jobup", label: "Jobup", url: "https://jobup.ch", category: "International", description: "Switzerland" },
  { id: "infojobs", label: "InfoJobs", url: "https://infojobs.net", category: "International", description: "Spain" },
  { id: "cadremploi", label: "Cadremploi", url: "https://cadremploi.fr", category: "International", description: "France" },
  { id: "apec", label: "APEC", url: "https://apec.fr", category: "International", description: "France executives" },

  // ═══════════════════════════════════════════════════════════════
  // COMPANY CAREER PAGES (Direct)
  // ═══════════════════════════════════════════════════════════════
  { id: "google_careers", label: "Google Careers", url: "https://careers.google.com", category: "Direct", description: "Google jobs" },
  { id: "microsoft_careers", label: "Microsoft Careers", url: "https://careers.microsoft.com", category: "Direct", description: "Microsoft jobs" },
  { id: "amazon_jobs", label: "Amazon Jobs", url: "https://amazon.jobs", category: "Direct", description: "Amazon careers" },
  { id: "apple_jobs", label: "Apple Jobs", url: "https://apple.com/careers", category: "Direct", description: "Apple careers" },
  { id: "meta_careers", label: "Meta Careers", url: "https://metacareers.com", category: "Direct", description: "Meta/Facebook jobs" },
  { id: "netflix_jobs", label: "Netflix Jobs", url: "https://jobs.netflix.com", category: "Direct", description: "Netflix careers" },
  { id: "salesforce_careers", label: "Salesforce Careers", url: "https://salesforce.com/careers", category: "Direct", description: "Salesforce jobs" },
  { id: "ibm_careers", label: "IBM Careers", url: "https://ibm.com/careers", category: "Direct", description: "IBM jobs" },
  { id: "oracle_careers", label: "Oracle Careers", url: "https://oracle.com/careers", category: "Direct", description: "Oracle jobs" },
  { id: "cisco_careers", label: "Cisco Careers", url: "https://jobs.cisco.com", category: "Direct", description: "Cisco jobs" },
  { id: "vmware_careers", label: "VMware Careers", url: "https://careers.vmware.com", category: "Direct", description: "VMware jobs" },
  { id: "redhat_jobs", label: "Red Hat Jobs", url: "https://redhat.com/jobs", category: "Direct", description: "Red Hat careers" },
  { id: "cloudflare_careers", label: "Cloudflare Careers", url: "https://cloudflare.com/careers", category: "Direct", description: "Cloudflare jobs" },
  { id: "datadog_careers", label: "Datadog Careers", url: "https://datadoghq.com/careers", category: "Direct", description: "Datadog jobs" },
  { id: "splunk_careers", label: "Splunk Careers", url: "https://splunk.com/careers", category: "Direct", description: "Splunk jobs" },
  { id: "paloalto_careers", label: "Palo Alto Careers", url: "https://jobs.paloaltonetworks.com", category: "Direct", description: "Palo Alto jobs" },
  { id: "crowdstrike_careers", label: "CrowdStrike Careers", url: "https://crowdstrike.com/careers", category: "Direct", description: "CrowdStrike jobs" },

  // ═══════════════════════════════════════════════════════════════
  // DIVERSITY & INCLUSION
  // ═══════════════════════════════════════════════════════════════
  { id: "diversitytech", label: "DiversityTech", url: "https://diversitytech.co", category: "Diversity", description: "Diverse tech talent" },
  { id: "pocit", label: "People of Color in Tech", url: "https://peopleofcolorintech.com", category: "Diversity", description: "POC in tech" },
  { id: "techladies", label: "Tech Ladies", url: "https://techladies.co", category: "Diversity", description: "Women in tech" },
  { id: "womenintechnology", label: "Women in Technology", url: "https://womenintechnology.org/career-center", category: "Diversity", description: "Women tech careers" },
  { id: "powertofly", label: "PowerToFly", url: "https://powertofly.com", category: "Diversity", description: "Diverse talent" },
  { id: "include", label: "Include.io", url: "https://include.io", category: "Diversity", description: "Inclusive hiring" },
  { id: "outintech", label: "Out in Tech", url: "https://outintech.com", category: "Diversity", description: "LGBTQ+ in tech" },
  { id: "lesbianswhotech", label: "Lesbians Who Tech", url: "https://lesbianswhotech.org/jobs", category: "Diversity", description: "LGBTQ+ tech jobs" },
  { id: "disabledjobs", label: "AbilityJobs", url: "https://abilityjobs.com", category: "Diversity", description: "Disability employment" },
  { id: "diversityjobs", label: "DiversityJobs", url: "https://diversityjobs.com", category: "Diversity", description: "Diversity-focused" },
  { id: "jopwell", label: "Jopwell", url: "https://jopwell.com", category: "Diversity", description: "Diverse professionals" },
  { id: "hbcu_careers", label: "HBCU Career Connect", url: "https://hbcucareerconnect.com", category: "Diversity", description: "HBCU talent" },
];

// ── Role Categories (Expanded) ──
export interface RoleCategory {
  title: string;
  icon: string;
  description: string;
  sampleTitles: string[];
  color: string;
}

export const roleCategories: RoleCategory[] = [
  {
    title: "Systems Administrator",
    icon: "🖥️",
    description: "Managing servers, operating systems, and core infrastructure across Windows, Linux, and Unix platforms.",
    sampleTitles: ["Systems Administrator", "Windows Administrator", "Linux Administrator", "Unix Administrator", "Server Administrator", "Infrastructure Administrator"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Network Engineer",
    icon: "🔀",
    description: "Designing, implementing, and troubleshooting enterprise network infrastructure and connectivity.",
    sampleTitles: ["Network Engineer", "Network Administrator", "Network Architect", "Wireless Engineer", "SD-WAN Engineer", "VoIP Engineer"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "SOC Analyst",
    icon: "👁️",
    description: "Security Operations Center roles monitoring threats, analyzing alerts, and responding to incidents 24/7.",
    sampleTitles: ["SOC Analyst Tier 1", "SOC Analyst Tier 2", "SOC Analyst Tier 3", "Security Analyst", "Threat Analyst", "SIEM Analyst"],
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Penetration Tester",
    icon: "🎯",
    description: "Offensive security roles performing ethical hacking, vulnerability assessments, and red team operations.",
    sampleTitles: ["Penetration Tester", "Ethical Hacker", "Red Team Operator", "Offensive Security Engineer", "Security Consultant", "Bug Bounty Hunter"],
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Cloud Engineer",
    icon: "☁️",
    description: "Designing and managing cloud infrastructure on AWS, Azure, GCP, and multi-cloud environments.",
    sampleTitles: ["Cloud Engineer", "AWS Engineer", "Azure Engineer", "GCP Engineer", "Cloud Architect", "Cloud Solutions Architect"],
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "DevOps Engineer",
    icon: "♾️",
    description: "Building CI/CD pipelines, automating infrastructure, and bridging development and operations.",
    sampleTitles: ["DevOps Engineer", "Platform Engineer", "Release Engineer", "Build Engineer", "Automation Engineer", "GitOps Engineer"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Site Reliability (SRE)",
    icon: "⚡",
    description: "Ensuring system reliability, scalability, and performance through automation and monitoring.",
    sampleTitles: ["Site Reliability Engineer", "SRE", "Production Engineer", "Reliability Engineer", "Platform SRE", "Infrastructure SRE"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Kubernetes Engineer",
    icon: "☸️",
    description: "Container orchestration, Kubernetes administration, and cloud-native application deployment.",
    sampleTitles: ["Kubernetes Engineer", "K8s Administrator", "Container Engineer", "OpenShift Engineer", "Platform Engineer", "Cloud Native Engineer"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Data Center Admin",
    icon: "🏢",
    description: "Managing physical and virtual data center infrastructure, hardware, and facilities.",
    sampleTitles: ["Data Center Technician", "Data Center Engineer", "DC Operations Engineer", "Facilities Engineer", "Data Center Manager", "Colo Engineer"],
    color: "from-slate-500 to-gray-700",
  },
  {
    title: "Virtualization Engineer",
    icon: "📦",
    description: "VMware, Hyper-V, and virtualization infrastructure management and optimization.",
    sampleTitles: ["Virtualization Engineer", "VMware Engineer", "VDI Administrator", "Hyper-V Administrator", "Citrix Administrator", "HCI Engineer"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Storage Engineer",
    icon: "💾",
    description: "SAN, NAS, and enterprise storage infrastructure design and administration.",
    sampleTitles: ["Storage Engineer", "SAN Administrator", "Storage Architect", "Backup Administrator", "Data Protection Engineer", "NetApp Engineer"],
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Database Administrator",
    icon: "🗄️",
    description: "Managing, optimizing, and securing database systems across SQL and NoSQL platforms.",
    sampleTitles: ["Database Administrator", "DBA", "Oracle DBA", "SQL Server DBA", "MySQL DBA", "Database Engineer"],
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "IT Support / Help Desk",
    icon: "🎧",
    description: "Providing technical support to end users, troubleshooting hardware/software issues.",
    sampleTitles: ["Help Desk Technician", "IT Support Specialist", "Desktop Support", "Technical Support Engineer", "Service Desk Analyst", "IT Technician"],
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "IT Manager / Director",
    icon: "👔",
    description: "Leadership roles managing IT teams, budgets, projects, and strategic initiatives.",
    sampleTitles: ["IT Manager", "IT Director", "Infrastructure Manager", "Network Manager", "Security Manager", "Operations Manager"],
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "IT Executive / CIO",
    icon: "👑",
    description: "C-level executive roles defining IT strategy and aligning technology with business goals.",
    sampleTitles: ["CIO", "CTO", "CISO", "VP of IT", "VP of Engineering", "VP of Infrastructure"],
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Security Engineer",
    icon: "🔐",
    description: "Designing, implementing, and maintaining security infrastructure and defenses.",
    sampleTitles: ["Security Engineer", "Cybersecurity Engineer", "Cloud Security Engineer", "Application Security Engineer", "DevSecOps Engineer", "Security Architect"],
    color: "from-red-600 to-rose-700",
  },
  {
    title: "Incident Response / DFIR",
    icon: "🚨",
    description: "Responding to breaches, containing threats, and conducting forensic investigations.",
    sampleTitles: ["Incident Responder", "DFIR Analyst", "Forensic Analyst", "Threat Hunter", "Malware Analyst", "Security Incident Manager"],
    color: "from-orange-600 to-red-600",
  },
  {
    title: "GRC / Compliance",
    icon: "📋",
    description: "Governance, Risk, and Compliance roles ensuring security policies and regulatory compliance.",
    sampleTitles: ["GRC Analyst", "Compliance Analyst", "Risk Analyst", "Security Auditor", "IT Auditor", "Privacy Analyst"],
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Microsoft 365 Admin",
    icon: "Ⓜ️",
    description: "Managing Microsoft cloud services including Exchange, SharePoint, Teams, and Intune.",
    sampleTitles: ["Microsoft 365 Administrator", "Exchange Administrator", "SharePoint Administrator", "Teams Administrator", "Intune Administrator"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "IAM Engineer",
    icon: "🪪",
    description: "Identity and Access Management, SSO, MFA, and privileged access solutions.",
    sampleTitles: ["IAM Engineer", "Identity Engineer", "PAM Engineer", "Access Management Specialist", "Okta Administrator", "Azure AD Engineer"],
    color: "from-indigo-500 to-purple-600",
  },
];

// ── Pre-built Prompt Templates (Expanded) ──
export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
  icon: string;
}

export const promptTemplates: PromptTemplate[] = [
  // System Administration
  {
    id: "sysadmin_general",
    title: "Systems Administrator",
    description: "General sysadmin roles across Windows, Linux, and infrastructure.",
    category: "SysAdmin",
    icon: "🖥️",
    prompt: `"Systems Administrator" OR "System Administrator" OR "SysAdmin" OR "Infrastructure Administrator" AND (Windows OR Linux OR "Active Directory" OR VMware OR servers) -junior -intern`,
  },
  {
    id: "windows_admin",
    title: "Windows Administrator",
    description: "Windows Server, Active Directory, and Microsoft infrastructure roles.",
    category: "SysAdmin",
    icon: "🪟",
    prompt: `"Windows Administrator" OR "Windows Engineer" OR "Windows Server Administrator" AND ("Windows Server" OR "Active Directory" OR GPO OR SCCM OR "Microsoft 365" OR PowerShell)`,
  },
  {
    id: "linux_admin",
    title: "Linux Administrator",
    description: "Linux server administration and engineering roles.",
    category: "SysAdmin",
    icon: "🐧",
    prompt: `"Linux Administrator" OR "Linux Engineer" OR "Unix Administrator" OR "Linux Systems Administrator" AND (RHEL OR Ubuntu OR CentOS OR Debian OR Bash OR Ansible OR "shell scripting")`,
  },
  {
    id: "active_directory",
    title: "Active Directory Admin",
    description: "AD, Azure AD, and identity management focused roles.",
    category: "SysAdmin",
    icon: "📂",
    prompt: `"Active Directory" OR "AD Administrator" OR "Identity Administrator" OR "Azure AD" AND (GPO OR LDAP OR DNS OR DHCP OR "Group Policy" OR federation OR SSO)`,
  },
  
  // Network Engineering
  {
    id: "network_engineer",
    title: "Network Engineer",
    description: "Core network engineering across routing, switching, and security.",
    category: "Network",
    icon: "🔀",
    prompt: `"Network Engineer" OR "Network Administrator" OR "Infrastructure Engineer" AND (Cisco OR Juniper OR routing OR switching OR BGP OR OSPF OR firewall) -sales -recruiter`,
  },
  {
    id: "network_architect",
    title: "Network Architect",
    description: "Senior architecture and design roles for enterprise networks.",
    category: "Network",
    icon: "🏗️",
    prompt: `"Network Architect" OR "Solutions Architect" OR "Principal Network Engineer" AND (design OR architecture OR "high-level design" OR enterprise OR "multi-site") -junior -entry`,
  },
  {
    id: "wireless_engineer",
    title: "Wireless / RF Engineer",
    description: "Wi-Fi, wireless LAN, and RF engineering positions.",
    category: "Network",
    icon: "📡",
    prompt: `"Wireless Engineer" OR "Wi-Fi Engineer" OR "RF Engineer" OR "WLAN Engineer" AND (Aruba OR "Cisco WLC" OR Meraki OR Ekahau OR "802.11" OR "site survey" OR wireless)`,
  },
  {
    id: "sdwan_engineer",
    title: "SD-WAN / SASE Engineer",
    description: "Software-defined WAN and SASE transformation roles.",
    category: "Network",
    icon: "🌐",
    prompt: `"SD-WAN Engineer" OR "SASE Engineer" OR "WAN Engineer" AND (Viptela OR VeloCloud OR "Prisma Access" OR Zscaler OR Fortinet OR "Silver Peak")`,
  },
  
  // Security
  {
    id: "soc_analyst",
    title: "SOC Analyst (All Tiers)",
    description: "Security Operations Center analyst roles.",
    category: "Security",
    icon: "👁️",
    prompt: `"SOC Analyst" OR "Security Analyst" OR "Security Operations" OR "Threat Analyst" AND (SIEM OR Splunk OR QRadar OR Sentinel OR "incident response" OR "threat detection")`,
  },
  {
    id: "soc_senior",
    title: "Senior SOC / Tier 2-3",
    description: "Senior SOC analyst with threat hunting and IR skills.",
    category: "Security",
    icon: "🔍",
    prompt: `("SOC Analyst" AND ("Tier 2" OR "Tier 3" OR Senior)) OR "Threat Hunter" OR "Senior Security Analyst" AND (SIEM OR "threat hunting" OR forensics OR "incident response") -"Tier 1" -entry`,
  },
  {
    id: "pentest",
    title: "Penetration Tester",
    description: "Offensive security and ethical hacking roles.",
    category: "Security",
    icon: "🎯",
    prompt: `"Penetration Tester" OR "Ethical Hacker" OR "Red Team" OR "Offensive Security" AND (OSCP OR "Burp Suite" OR Metasploit OR "Kali Linux" OR "vulnerability assessment")`,
  },
  {
    id: "security_engineer",
    title: "Security Engineer",
    description: "Security engineering and implementation roles.",
    category: "Security",
    icon: "🔐",
    prompt: `"Security Engineer" OR "Cybersecurity Engineer" OR "Information Security Engineer" AND (firewall OR SIEM OR "endpoint security" OR "cloud security" OR IDS OR IPS)`,
  },
  {
    id: "incident_response",
    title: "Incident Response / DFIR",
    description: "Digital forensics and incident response roles.",
    category: "Security",
    icon: "🚨",
    prompt: `"Incident Response" OR "DFIR" OR "Forensic Analyst" OR "Incident Handler" OR "Threat Hunter" AND (forensics OR "malware analysis" OR "breach response" OR GCIH OR GCFA)`,
  },
  {
    id: "grc",
    title: "GRC / Compliance Analyst",
    description: "Governance, Risk, and Compliance focused roles.",
    category: "Security",
    icon: "📋",
    prompt: `"GRC Analyst" OR "Compliance Analyst" OR "Risk Analyst" OR "Security Auditor" OR "IT Auditor" AND (SOC2 OR "ISO 27001" OR NIST OR HIPAA OR PCI-DSS OR GDPR)`,
  },
  {
    id: "cloud_security",
    title: "Cloud Security Engineer",
    description: "Cloud-focused security engineering roles.",
    category: "Security",
    icon: "☁️",
    prompt: `"Cloud Security Engineer" OR "Cloud Security Architect" AND (AWS OR Azure OR GCP) AND ("cloud security" OR CSPM OR CWPP OR "IAM" OR "security controls")`,
  },
  {
    id: "devsecops",
    title: "DevSecOps Engineer",
    description: "Security automation and secure development pipeline roles.",
    category: "Security",
    icon: "🔧",
    prompt: `"DevSecOps" OR "Security Automation" OR "AppSec Engineer" AND (SAST OR DAST OR "CI/CD" OR "secure coding" OR Snyk OR Veracode OR "container security")`,
  },
  {
    id: "iam_engineer",
    title: "IAM / Identity Engineer",
    description: "Identity and Access Management focused roles.",
    category: "Security",
    icon: "🪪",
    prompt: `"IAM Engineer" OR "Identity Engineer" OR "PAM Engineer" OR "Access Management" AND (Okta OR "Azure AD" OR CyberArk OR SailPoint OR "zero trust" OR SSO OR MFA)`,
  },
  
  // Cloud
  {
    id: "cloud_engineer",
    title: "Cloud Engineer",
    description: "General cloud engineering across AWS, Azure, GCP.",
    category: "Cloud",
    icon: "☁️",
    prompt: `"Cloud Engineer" OR "Cloud Infrastructure Engineer" OR "Cloud Architect" AND (AWS OR Azure OR GCP) AND (Terraform OR CloudFormation OR "Infrastructure as Code")`,
  },
  {
    id: "aws_engineer",
    title: "AWS Engineer",
    description: "AWS-focused cloud engineering roles.",
    category: "Cloud",
    icon: "🟠",
    prompt: `"AWS Engineer" OR "AWS Cloud Engineer" OR "AWS Solutions Architect" AND (AWS OR "Amazon Web Services") AND (EC2 OR S3 OR VPC OR Lambda OR EKS) -Azure -GCP`,
  },
  {
    id: "azure_engineer",
    title: "Azure Engineer",
    description: "Microsoft Azure focused cloud roles.",
    category: "Cloud",
    icon: "🔵",
    prompt: `"Azure Engineer" OR "Azure Cloud Engineer" OR "Azure Administrator" AND (Azure OR Microsoft) AND ("Azure AD" OR ARM OR "Azure DevOps" OR AKS OR networking)`,
  },
  {
    id: "gcp_engineer",
    title: "GCP Engineer",
    description: "Google Cloud Platform engineering roles.",
    category: "Cloud",
    icon: "🔴",
    prompt: `"GCP Engineer" OR "Google Cloud Engineer" OR "GCP Architect" AND (GCP OR "Google Cloud") AND (GKE OR BigQuery OR "Compute Engine" OR Terraform)`,
  },
  
  // DevOps & SRE
  {
    id: "devops",
    title: "DevOps Engineer",
    description: "DevOps and automation focused roles.",
    category: "DevOps",
    icon: "♾️",
    prompt: `"DevOps Engineer" OR "DevOps Specialist" OR "Platform Engineer" AND (CI/CD OR Jenkins OR GitLab OR "GitHub Actions") AND (Kubernetes OR Docker OR Terraform OR Ansible)`,
  },
  {
    id: "sre",
    title: "Site Reliability Engineer",
    description: "SRE and platform reliability roles.",
    category: "DevOps",
    icon: "⚡",
    prompt: `"Site Reliability Engineer" OR "SRE" OR "Platform Engineer" OR "Production Engineer" AND (Kubernetes OR observability OR monitoring OR "incident management") AND (Python OR Go)`,
  },
  {
    id: "kubernetes",
    title: "Kubernetes Engineer",
    description: "Container orchestration and K8s focused roles.",
    category: "DevOps",
    icon: "☸️",
    prompt: `"Kubernetes Engineer" OR "K8s Engineer" OR "Container Engineer" OR "Platform Engineer" AND (Kubernetes OR Docker OR Helm OR "service mesh" OR Istio OR "cloud native")`,
  },
  {
    id: "platform_engineer",
    title: "Platform Engineer",
    description: "Internal developer platform and infrastructure roles.",
    category: "DevOps",
    icon: "🎛️",
    prompt: `"Platform Engineer" OR "Infrastructure Engineer" OR "Platform Engineering" AND (Kubernetes OR Terraform OR "developer experience" OR "internal platform" OR GitOps)`,
  },
  
  // Virtualization & Data Center
  {
    id: "vmware_engineer",
    title: "VMware Engineer",
    description: "VMware vSphere and virtualization roles.",
    category: "Infrastructure",
    icon: "📦",
    prompt: `"VMware Engineer" OR "Virtualization Engineer" OR "VDI Administrator" AND (VMware OR vSphere OR ESXi OR vCenter OR NSX OR vSAN OR Horizon)`,
  },
  {
    id: "datacenter",
    title: "Data Center Engineer",
    description: "Data center operations and facilities roles.",
    category: "Infrastructure",
    icon: "🏢",
    prompt: `"Data Center Engineer" OR "Data Center Technician" OR "DC Operations" AND (hardware OR cabling OR "rack and stack" OR colocation OR facilities)`,
  },
  {
    id: "storage_engineer",
    title: "Storage Engineer",
    description: "SAN, NAS, and enterprise storage roles.",
    category: "Infrastructure",
    icon: "💾",
    prompt: `"Storage Engineer" OR "Storage Administrator" OR "SAN Engineer" AND (NetApp OR "Dell EMC" OR "Pure Storage" OR HPE OR SAN OR NAS OR "data protection")`,
  },
  {
    id: "backup_admin",
    title: "Backup Administrator",
    description: "Backup, recovery, and data protection roles.",
    category: "Infrastructure",
    icon: "🔄",
    prompt: `"Backup Administrator" OR "Backup Engineer" OR "Data Protection Engineer" AND (Veeam OR Commvault OR NetBackup OR Rubrik OR Cohesity OR "disaster recovery")`,
  },
  
  // IT Support
  {
    id: "helpdesk",
    title: "Help Desk / IT Support",
    description: "Help desk and technical support roles.",
    category: "Support",
    icon: "🎧",
    prompt: `"Help Desk" OR "IT Support" OR "Technical Support" OR "Desktop Support" OR "Service Desk" AND (troubleshooting OR ticketing OR Windows OR Microsoft) -senior -lead`,
  },
  {
    id: "desktop_support",
    title: "Desktop Support Technician",
    description: "Desktop and end-user support roles.",
    category: "Support",
    icon: "🖱️",
    prompt: `"Desktop Support" OR "Desktop Technician" OR "Deskside Support" OR "End User Support" AND (Windows OR Mac OR hardware OR software OR imaging)`,
  },
  {
    id: "it_technician",
    title: "IT Technician",
    description: "General IT technician and hands-on technical roles.",
    category: "Support",
    icon: "🔧",
    prompt: `"IT Technician" OR "Computer Technician" OR "IT Specialist" OR "Field Technician" AND (hardware OR software OR installation OR maintenance OR repair)`,
  },
  {
    id: "noc_engineer",
    title: "NOC Engineer",
    description: "Network Operations Center monitoring roles.",
    category: "Support",
    icon: "📊",
    prompt: `"NOC Engineer" OR "NOC Technician" OR "NOC Analyst" OR "Operations Engineer" AND (monitoring OR "incident response" OR troubleshooting OR 24x7 OR network)`,
  },
  
  // IT Management
  {
    id: "it_manager",
    title: "IT Manager",
    description: "IT management and leadership roles.",
    category: "Management",
    icon: "👔",
    prompt: `"IT Manager" OR "Infrastructure Manager" OR "Network Manager" OR "Systems Manager" AND (team OR leadership OR budget OR strategy OR projects)`,
  },
  {
    id: "it_director",
    title: "IT Director",
    description: "Director-level IT leadership roles.",
    category: "Management",
    icon: "🎯",
    prompt: `"IT Director" OR "Director of IT" OR "Director of Infrastructure" OR "Director of Technology" AND (strategy OR leadership OR "digital transformation" OR enterprise)`,
  },
  {
    id: "it_executive",
    title: "IT Executive / CIO / CTO",
    description: "C-level IT executive positions.",
    category: "Management",
    icon: "👑",
    prompt: `"Chief Information Officer" OR CIO OR CTO OR CISO OR "VP of IT" OR "VP of Technology" AND (strategy OR "digital transformation" OR leadership OR "business alignment")`,
  },
  
  // Microsoft
  {
    id: "microsoft_365",
    title: "Microsoft 365 Administrator",
    description: "M365, Exchange, Teams, SharePoint admin roles.",
    category: "Microsoft",
    icon: "Ⓜ️",
    prompt: `"Microsoft 365 Administrator" OR "M365 Admin" OR "Office 365 Administrator" AND (Exchange OR SharePoint OR Teams OR Intune OR "Azure AD" OR PowerShell)`,
  },
  {
    id: "exchange_admin",
    title: "Exchange Administrator",
    description: "Exchange Server and Exchange Online administration.",
    category: "Microsoft",
    icon: "📧",
    prompt: `"Exchange Administrator" OR "Email Administrator" OR "Messaging Engineer" AND (Exchange OR "Exchange Online" OR "mail flow" OR "email security" OR PowerShell)`,
  },
  {
    id: "intune_admin",
    title: "Intune / Endpoint Manager",
    description: "Microsoft Intune and endpoint management roles.",
    category: "Microsoft",
    icon: "📱",
    prompt: `"Intune Administrator" OR "Endpoint Manager" OR "MDM Administrator" AND (Intune OR SCCM OR MECM OR "device management" OR "endpoint security" OR Autopilot)`,
  },
  
  // Database
  {
    id: "dba",
    title: "Database Administrator",
    description: "DBA roles across SQL Server, Oracle, MySQL.",
    category: "Database",
    icon: "🗄️",
    prompt: `"Database Administrator" OR "DBA" OR "Database Engineer" AND ("SQL Server" OR Oracle OR MySQL OR PostgreSQL) AND (performance OR backup OR "high availability")`,
  },
  {
    id: "oracle_dba",
    title: "Oracle DBA",
    description: "Oracle Database administration roles.",
    category: "Database",
    icon: "🔴",
    prompt: `"Oracle DBA" OR "Oracle Database Administrator" AND (Oracle OR RAC OR "Data Guard" OR RMAN OR "performance tuning" OR PL/SQL)`,
  },
  {
    id: "sql_server_dba",
    title: "SQL Server DBA",
    description: "Microsoft SQL Server administration roles.",
    category: "Database",
    icon: "🔷",
    prompt: `"SQL Server DBA" OR "MSSQL DBA" OR "SQL Database Administrator" AND ("SQL Server" OR SSRS OR SSIS OR "Always On" OR T-SQL OR "performance tuning")`,
  },
  
  // Remote & Entry Level
  {
    id: "remote_it",
    title: "Remote IT Jobs",
    description: "Remote IT infrastructure and support positions.",
    category: "Remote",
    icon: "🏠",
    prompt: `("Systems Administrator" OR "Network Engineer" OR "Cloud Engineer" OR "DevOps" OR "IT Support") AND (remote OR "work from home" OR "fully remote" OR distributed) -onsite`,
  },
  {
    id: "remote_security",
    title: "Remote Security Jobs",
    description: "Remote cybersecurity positions.",
    category: "Remote",
    icon: "🔐",
    prompt: `("Security Engineer" OR "Security Analyst" OR "SOC Analyst" OR "Penetration Tester") AND (remote OR "work from home" OR "fully remote") -onsite`,
  },
  {
    id: "entry_level",
    title: "Entry-Level IT Jobs",
    description: "Entry-level positions for IT career starters.",
    category: "Entry",
    icon: "🚀",
    prompt: `("IT Support" OR "Help Desk" OR "Junior" OR "Associate" OR "Entry Level" OR "IT Technician" OR "NOC") AND (training OR "entry level" OR graduate) -senior -lead -"5+ years"`,
  },
  {
    id: "internship",
    title: "IT Internships",
    description: "Internship opportunities in IT and security.",
    category: "Entry",
    icon: "🎓",
    prompt: `(intern OR internship OR "summer intern" OR "co-op") AND (IT OR technology OR cybersecurity OR "systems administrator" OR "network" OR cloud OR DevOps)`,
  },
];

// ── Search Tips ──
export interface SearchTip {
  title: string;
  description: string;
  icon: string;
}

export const searchTips: SearchTip[] = [
  {
    title: "Use Boolean Operators",
    description: 'Combine keywords with AND, OR, NOT to refine results. Example: "DevOps Engineer" AND (Kubernetes OR Docker) NOT manager',
    icon: "💡",
  },
  {
    title: "Leverage Exact Phrases",
    description: 'Wrap multi-word titles in quotes: "Site Reliability Engineer" ensures exact match instead of separate keywords.',
    icon: "🎯",
  },
  {
    title: "Exclude Unwanted Results",
    description: "Use minus (-) to exclude: Systems Administrator -recruiter -staffing -sales removes irrelevant listings.",
    icon: "🚫",
  },
  {
    title: "Target Salary Ranges",
    description: 'Include salary keywords: "DevOps Engineer" AND ($150k OR $160k OR "competitive salary")',
    icon: "💰",
  },
  {
    title: "Set Up Job Alerts",
    description: "Save your refined searches as alerts on LinkedIn and Indeed to get notified of new matching positions daily.",
    icon: "🔔",
  },
  {
    title: "Try Niche Job Boards",
    description: "For security roles try CyberSeek.org, for cleared jobs use ClearanceJobs.com, for tech use Dice.com.",
    icon: "🔄",
  },
  {
    title: "Include Certification Keywords",
    description: "Add certifications you hold (CKA, AWS SAA, RHCE, CCNP) to match roles that value those credentials.",
    icon: "📜",
  },
  {
    title: "Use Location Modifiers",
    description: '"DevOps Engineer" AND (remote OR "San Francisco" OR "Austin") to target specific areas or remote work.',
    icon: "📍",
  },
  {
    title: "Search by Security Clearance",
    description: 'For government roles: "Systems Administrator" AND ("TS/SCI" OR "Secret Clearance" OR "Public Trust")',
    icon: "🔐",
  },
  {
    title: "Filter by Company Type",
    description: 'Target specific environments: "SRE" AND (startup OR enterprise OR FAANG OR "Series A")',
    icon: "🏢",
  },
  {
    title: "Include Tool Keywords",
    description: 'Add specific tools: "DevOps Engineer" AND (Terraform OR Ansible OR Kubernetes OR "GitHub Actions")',
    icon: "🔧",
  },
  {
    title: "Optimize for ATS",
    description: "Use standard job titles and include keywords from job descriptions when tailoring your resume.",
    icon: "📝",
  },
];
