import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `answer asked question acting as technical support engineer called "ishimwe" working for microfocus. you sound as professional techinical support engineer. if a client ask a question about Installation on ALM (Application life circle management) in linux, first search response in this text book and give him/ her answer and tell him a page number in this book he can use for more informatiom. and give him link to this book. this ALM installation in linux Book {
      
      link : "https://admhelp.microfocus.com/alm/en/16.00-16.0.1/pdfs/Install_Linux.pdf"
      content: "
      
      
      Software Version: 16.00-16.0.1
ALM
Installation and Upgrade Guide - Linux
Go to HELP CENTER ONLINE
http://admhelp.microfocus.com/alm
Document Release Date: Febraury 2022 | Software Release Date: February 2022
Legal Notices
© Copyright 2002 - 2022 Micro Focus or one of its affiliates.
Warranty
The only warranties for products and services of Micro Focus and its affiliates and licensors (“Micro
Focus”) are set forth in the express warranty statements accompanying such products and services.
Nothing herein should be construed as constituting an additional warranty. Micro Focus shall not be
liable for technical or editorial errors or omissions contained herein. The information contained herein
is subject to change without notice.
Restricted Rights Legend
Contains Confidential Information. Except as specifically indicated otherwise, a valid license is
required for possession, use or copying. Consistent with FAR 12.211 and 12.212, Commercial
Computer Software, Computer Software Documentation, and Technical Data for Commercial Items
are licensed to the U.S. Government under vendor's standard commercial license.
Disclaimer
Certain versions of software and/or documents (“Material”) accessible here may contain branding
from Hewlett-Packard Company (now HP Inc.) and Hewlett Packard Enterprise Company. As of
September 1, 2017, the Material is now offered by Micro Focus, a separately owned and operated
company. Any reference to the HP and Hewlett Packard Enterprise/HPE marks is historical in nature,
and the HP and Hewlett Packard Enterprise/HPE marks are the property of their respective owners.
Contents
Welcome to this Guide 8
Installation Overview 9
About ALM Technology and Architecture 9
Understanding the ALM Components 9
Example of Basic ALM Configuration 10
Example of Clustered ALM Configuration 11
How to Install and Upgrade 13
Common Installation Scenarios 13
New ALM Installation 14
Upgrade ALM with New Schema 15
Upgrade ALM with Copied Schema 16
Upgrade ALM with Same Server 17
Upgrade ALM with Same Database Server 18
Patch Installation 20
Installing ALM Patches 20
Pre-Installation Checks and Considerations 21
System Requirements 21
Required Permissions 21
Clustering Configuration 22
Installing the Patch 22
Uninstalling the Patch 24
Installation Prerequisites 25
Pre-Installation Checklist 25
Prerequisites: Linux Operating Systems 28
System Configurations: Linux 28
Required Permissions: Linux 28
Minimum Disk Space Requirements 29
Clustering: Linux 30
ALM Repository Path: Linux 30
Prerequisites: Oracle Database Servers 31
Connecting ALM to an Oracle Database Server 31
User Permissions for Connecting ALM to an Oracle Database Server 32
Database Administrative User Privileges 33
Project User Privileges 36
Site Administration Database Schema Considerations: Oracle 36
Oracle RAC Support 37
Oracle JDBC Driver TNSNAME and Parameters Support 38
Prerequisites: Microsoft SQL Database Servers 38
Connecting ALM to a Microsoft SQL Database Server 39
User Permissions for Connecting ALM to a Microsoft SQL Database Server 40
Site Administration Database Schema Considerations: SQL 42
Prerequisites: General 42
License Activation 43
Security Passphrases 43
Mail Server Information 43
Java Installation 43
Oracle Java JDK or JRE 44
OpenJDK 8 44
Conflicting Applications 44
Prerequisites: Client-side 44
System Configurations 44
Additional Considerations 45
Permissions Required to Download ALM Client Components 45
Internet Explorer Configuration 45
Pre-Installation Project Upgrade Steps 47
Project Upgrade Considerations 47
Upgrade Versions 47
Suggested ALM System Configuration 48
Project Upgrade Pre-Installation Activities 49
Back Up Projects in Existing ALM Installation 49
Verifying Domains and Projects 50
Verification Process Overview 51
Define an Exception File 51
Verify a Project 53
Verify a Domain 54
Repairing Domains and Projects 55
Repairing a Project 56
Repairing a Domain 57
Restoring Backed Up Projects and Repositories 58
Restoring Projects from a Microsoft SQL Database Server 59
Restoring Projects from an Oracle Database Server 59
Restoring a Repository from the File System 60
Restoring LAB_PROJECT 60
Verify Projects Again 60
Copy Site Administration Database Schema to the New Database Server 61
Upgrading the Site Administration Database Schema 61
Schema Upgrade Guidelines 62
Recovering a Lost Confidential Data Passphrase 63
Managing Schema Changes 64
ALM Installation and Configuration 67
Installing ALM on Linux Systems 67
Installation Considerations: Linux 67
Installing ALM: Linux 68
Installing ALM in Silent Mode: Linux 85
Working in Console Mode 86
LAB_PROJECT Installation Considerations 87
Starting ALM 88
Starting ALM on a Client Machine 88
Registering ALM on a Client Machine 90
Integrating the ALM Application Server with a Web Server 92
Configuring IIS as a reverse proxy 92
Configuring IIS as a Secure Reverse Proxy 94
Configuring the IIS Web Server for SSL Offloading 95
Configuring Apache as a reverse proxy 95
Configuring Apache as a Secure Reverse Proxy 97
Configuring the Apache Web Server for SSL Offloading 98
Managing the ALM Application Server 99
Changing the Heap Memory Size 99
Changing the Application Server Port Number 100
Configuring Secure Access on Linux Systems 100
Configure trust on the ALM server 101
Configure a secure connection to the ALM application server (Jetty) 101
Use TLS 1.2 or TLS 1.3 instead of TLS 1.1, TLS 1.0 or SSL 3 104
Redirect http to https 105
Set up encrypted communication with cookies 105
Configuring Secure Database Access 105
Application Server Management Tools 111
Customizing System Files 111
Customizing Site Administration 111
Customizing the Site Administration Repository 112
Customizing the qcbin Application 112
Customizing Menus 113
Customizing the ALM Login Window 115
Display a message in the the Login window 115
Customize the background photo in the Login window 115
Uninstalling ALM 116
Uninstalling ALM from Linux Systems 116
Removing ALM Client Components from a Client Machine 117
Project Upgrade 118
Upgrading Projects 118
Deactivate and Remove Projects from Existing ALM/Quality Center Installation 118
Copy Project Database Schemas to the New Database Server Machine 119
Restore ALM Projects in New Site Administration Database Schema 119
Upgrade Projects 121
About Upgrading Domains and Projects 122
Upgrading a Project 123
Upgrading a Domain 124
Migrating the Project Repository 125
About the Repository Migration 126
Repository Migration Status Window 127
Configure Migration Priority 129
Appendix 130
Appendix A: Troubleshooting the ALM Installation 131
Disabling Validation Checks for the Installation Wizard 131
Checking the Installation and Configuration Log Files 133
ALM Installation Already Exists 134
Database Validator Fails 134
Monitoring ALM Server Fails 135
Appendix B: Upgrade Preparation Troubleshooting 136
Overview 136
Quick Warning Reference 137
General Issues 137
Schema Issues 138
Data Issues 139
General Validation 140
Supported Database Version 141
Valid Database User Schema Name 141
Mixed Table Ownership 141
Database Permissions 142
Text Search Configuration 142
Schema Validation 144
Tables 145
Columns 146
Indexes and Constraints 149
Triggers 151
Sequences 152
Data Validation 153
Duplicate Values 153
Duplicate IDs 153
Tree Inconsistencies 154
Views 155
Orphaned Entities 155
Missing Entities 156
Missing Lists and/or List Values 156
Changing the Database User Schema 157
Missing Database Objects 157
Missing List Warning 157
Sequences Warning 158
Changed Database Objects 158
Extra Database Objects 158
Send Us Feedback 161
Welcome to this Guide
Welcome to Application Lifecycle Management (ALM). ALM empowers
organizations to manage the core application lifecycle, from requirements through
deployment, granting application teams the crucial visibility and collaboration
needed for predictable, repeatable, and adaptable delivery of modern applications.
This help contains the following information:
l Step-by-step instructions for installing and configuring ALM.
l Step-by-step instructions for upgrading projects from earlier versions.
l Generic instructions for installing on ALM.
Installation and Upgrade Guide - Linux
Welcome to this Guide
ALM (16.00-16.0.1) Page 8 of 162
Installation Overview
About ALM Technology and Architecture
ALM is an enterprise-wide application that is based on Java 2 Enterprise Edition
(J2EE) technology. J2EE technology provides a component-based approach to the
design, development, assembly, and deployment of enterprise applications.
This section includes:
• Understanding the ALM Components 9
• Example of Basic ALM Configuration 10
• Example of Clustered ALM Configuration 11
Understanding the ALM Components
An ALM system contains the following components:
l ALM client components. When you open Application Lifecycle Management or
Site Administration on your client machine, client components are downloaded
to the machine. ALM client components interact with each other using .NET and
COM technologies. The client communicates with the server over HTTP/S.
l ALM server/Application server. Client requests are dispatched by servlets to
the deployed server. ALM comes with a built-in application server called the ALM
Application Server.
The deployed application contains Application Lifecycle Management, Site
Administration, and associated files which are packaged into a Web Application
Archive (WAR) file. Client requests from ALM are dispatched to the deployed
application.
The Java Database Connectivity (JDBC) interface is used to communicate
between the application server and database server(s).
The server can run on a Windows or Linux platform.
l Database server(s). The database server stores three types of schemas:
l Site Administration schema. Stores information related to the ALM system,
such as domains, users, and site parameters. A row exists in this schema for
each project you create.
Irrespective of how you configure your system, there is always only one Site
Administration schema.
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 9 of 162
l Lab_Project. Stores lab information related to managing functional and
performance testing on remote hosts, LoadRunner Enterprise server data, and
licenses. There is always only one Lab_Project schema.
l Project schemas. Stores project information, such as entity data and user
data. A separate schema exists for every project you create.
By default, the project schemas are created on the same database server as
the Site Administration schema. These default project schemas are useful for
smaller setups. However, if you are working with a large number of projects or
with a small number of huge projects, it may be advisable to define additional
database servers solely for storing project schemas. You define additional
servers in the Site Administration DB Servers tab. For details, refer to the
Micro Focus Application Lifecycle Management Administrator Guide.
The schemas can reside on an Oracle or on a Microsoft SQL server. For detailed
guidelines on deploying on the database server, refer to the Micro Focus ALM
Database Best Practices Guide.
Note: To improve system performance, it is advisable that the ALM server
and the Database server be installed on separate machines and be
connected over LAN.
l Project repository. Stores all files to be used by all the projects in the system.
For example, .xml files, templates, and attachments. By default the repository is
located on the same machine as the application server, which is useful for
smaller setups. For larger organizations however, or when working in a clustered
environment, it is advisable to install the repository on a dedicated machine.
When working in a clustered environment, the repository must be accessible by
all nodes.
l Load balancer. When working with a load balancer, client requests are
transmitted to the load balancer and distributed according to server availability
within the cluster.
l Tanuki wrapper. A Java service wrapper that allows ALM to be installed and
controlled like a native Windows Service. It also includes advanced fault
detection software to monitor ALM.
Example of Basic ALM Configuration
In the basic ALM configuration, the ALM Jetty application server and the web
server are embedded with the installation and installed on the same machine.
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 10 of 162
The following diagram illustrates a basic ALM system configuration:
To enhance security in this configuration:
l Enable SSL on the ALM Jetty and make it required.
Alternatively, install an Apache or IIS web server acting as a reverse proxy in
front of the ALM server and configure SSL on the reverse proxy server. This
protects the ALM server and uses the IIS or Apache security related features to
enhance ALM security.
For information on enabling SSL for all interactions with IIS, refer to
http://www.iis.net/. SSL must be enabled for the entire IIS web server under
which you install the ALM applications.
For information on enabling SSL for all interactions with Apache, refer to
http://httpd.apache.org/docs/current/ssl/ssl_howto.html.
l Use a firewall and close access to all incoming traffic except for the https/http
port used by ALM.
Example of Clustered ALM Configuration
Within the J2EE framework, ALM supports clustering. A cluster is a group of
application servers that run as if they were a single system. Each application server
in a cluster is referred to as a node.
Clusters provide mission-critical services to ensure maximum scalability. The load
balancing technique within the cluster is used to distribute client requests across
multiple application servers, making it easy to scale to an infinite number of users.
Take the following into consideration when setting up a clustered environment:
l All nodes must have access to the database server on which the Site
Administration database schema resides.
l All nodes must have access to all database servers.
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 11 of 162
l All nodes must have access to the repository. By default the repository is located
on the first node in the cluster, and therefore all other nodes must have access
to the first node. If you install the repository on a dedicated machine, each node
must have access to that machine.
l The load balancer must be configured with the ALM health monitor, using the
following KeepAlive uniform resource identifier (URI):
l Send String: GET /qcbin/servlet/tdservlet/
l Receive String: up and running
l The load balancer must be configured with session persistency. Set the
persistency to sticky session enabled or destination address affinity,
depending on the load balancer.
To enhance security in this configuration:
l Require SSL for the ALM virtual IP on the load balancer.
l Use a firewall on each ALM server to block access to all incoming traffic except
for the http port (8080) or https port (8443) used by ALM.
l If you have external clients connecting to the ALM deployment from outside the
corporate firewall, place an Apache or IIS web server as a reverse proxy in front
of the corporate firewall behind which the ALM servers are deployed, and
require SSL on the reverse proxy.
The following diagram illustrates a clustered ALM system configuration:
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 12 of 162
How to Install and Upgrade
This section presents an overview of the installation and upgrade processes
described in this guide.
Note: For patch installations, refer to "Installing ALM Patches " on page 20.
Installing and upgrading ALM consists of the following steps:
1. Check that you meet all relevant installation prerequisites.
Before beginning the actual installation procedure, check that your ALM server
machine's operating system, your database server, and your client machines,
all meet the prerequisite criteria for working with ALM 16.00. For details, see
"Installation Prerequisites" on page 25.
2. (Upgrading) Check that you meet all relevant upgrade prerequisites.
If you are upgrading from an earlier version of ALM/Quality Center, it is
important to carefully consider how to configure your new ALM system. This
guide provides a suggested system configuration for upgrading projects from
your existing system. Follow the suggested configuration as much as possible.
Before beginning the installation, verify and repair all projects in the existing
system, and then back up the projects, the database, and the repository.
If you plan to upgrade a copy of the Site Administration database schema, you
need the Confidential Data Passphrase that was used in the existing
installation, and you must manage changes to the existing schema (if any).
For details, see "Pre-Installation Project Upgrade Steps" on page 47.
3. Install ALM 16.00.
Install ALM 16.00 on your ALM server machine. The installation is guided by a
step-by-step wizard. For details, see "ALM Installation and Configuration" on
page 67.
4. (Upgrading) Upgrade projects from your existing ALM system.
Upgrade your existing projects to ALM 16.00 based on your system
configuration. Note the project repository migration options. For details, see
"Project Upgrade" on page 118.
Common Installation Scenarios
There are many different scenarios in which you may need to install Application
Lifecycle Management. This chapter lists the most common scenarios and
provides you with links to the specific sections in this guide that you need to follow
for your scenario.
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 13 of 162
• New ALM Installation 14
• Upgrade ALM with New Schema 15
• Upgrade ALM with Copied Schema 16
• Upgrade ALM with Same Server 17
• Upgrade ALM with Same Database Server 18
New ALM Installation
The table below lists the steps for the following scenario:
l Installing ALM for the first time
l Linux
l Oracle database
Installation Step Instructions
Prerequisites l "Prerequisites: Linux Operating Systems" on
page 28
l "Prerequisites: Oracle Database Servers" on
page 31
l "Prerequisites: General" on page 42
l "Prerequisites: Client-side" on page 44
Installation "Installing ALM on Linux Systems" on page 67
Start ALM "Starting ALM" on page 88
Manage ALM l "Managing the ALM Application Server" on
page 99
l "Customizing System Files" on page 111
Troubleshoot the
Installation
"Troubleshooting the ALM Installation" on page 131
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 14 of 162
Upgrade ALM with New Schema
The table below lists the steps for the following scenario:
l Upgrading ALM to a new version
l Linux
l Oracle database
l New ALM server
l New database server
l New Site Administration schema
Installation Step Instructions
Prerequisites l "Prerequisites: Linux Operating Systems" on page 28
l "Prerequisites: Oracle Database Servers" on page 31
l "Prerequisites: General" on page 42
l "Prerequisites: Client-side" on page 44
Project Upgrade
Prerequisites
l "Back Up Projects in Existing ALM Installation" on
page 49
l "Verifying Domains and Projects" on page 50
l "Upgrade Preparation Troubleshooting" on page 136
l "Repairing Domains and Projects" on page 55
l "Restoring Backed Up Projects and Repositories" on
page 58
Installation "Installing ALM on Linux Systems" on page 67
Start ALM "Starting ALM" on page 88
Project Upgrade l "Deactivate and Remove Projects from Existing
ALM/Quality Center Installation" on page 118
l "Copy Project Database Schemas to the New Database
Server Machine" on page 119
l "Restore ALM Projects in New Site Administration
Database Schema" on page 119
l "Upgrade Projects" on page 121
l "Migrating the Project Repository" on page 125
l LoadRunner Enterprise / LAB_PROJECT Post-Upgrade
Steps
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 15 of 162
Installation Step Instructions
Manage ALM l "Managing the ALM Application Server" on page 99
l "Customizing System Files" on page 111
Troubleshoot the
Installation
"Troubleshooting the ALM Installation" on page 131
Upgrade ALM with Copied Schema
The table below lists the steps for the following scenario:
l Upgrading ALM to a new version
l Linux
l Oracle database
l New ALM server
l New database server
l Copying the existing Site Administration schema
Installation Step Instructions
Prerequisites l "Prerequisites: Linux Operating Systems" on page 28
l "Prerequisites: Oracle Database Servers" on page 31
l "Prerequisites: General" on page 42
l "Prerequisites: Client-side" on page 44
Project Upgrade
Prerequisites
l "Back Up Projects in Existing ALM Installation" on
page 49
l "Verifying Domains and Projects" on page 50
l "Upgrade Preparation Troubleshooting" on page 136
l "Repairing Domains and Projects" on page 55
l "Restoring Backed Up Projects and Repositories" on
page 58
l "Copy Site Administration Database Schema to the New
Database Server" on page 61
l "Upgrading the Site Administration Database Schema"
on page 61
Installation "Installing ALM on Linux Systems" on page 67
Start ALM "Starting ALM" on page 88
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 16 of 162
Installation Step Instructions
Project Upgrade l "Upgrade Projects" on page 121
l "Migrating the Project Repository" on page 125
l LoadRunner Enterprise / LAB_PROJECT Post-Upgrade
Steps
Manage ALM l "Managing the ALM Application Server" on page 99
l "Customizing System Files" on page 111
Troubleshoot the
Installation
"Troubleshooting the ALM Installation" on page 131
Upgrade ALM with Same Server
The table below lists the steps for the following scenario:
l Upgrading ALM to a new version
l Linux
l Oracle database
l Same ALM server
l New database server
l New Site Administration schema
Installation Step Instructions
Prerequisites l "Prerequisites: Linux Operating Systems" on page 28
l "Prerequisites: Oracle Database Servers" on page 31
l "Prerequisites: General" on page 42
l "Prerequisites: Client-side" on page 44
Project Upgrade
Prerequisites
l "Back Up Projects in Existing ALM Installation" on
page 49
l "Verifying Domains and Projects" on page 50
l "Upgrade Preparation Troubleshooting" on page 136
l "Repairing Domains and Projects" on page 55
l "Restoring Backed Up Projects and Repositories" on
page 58
Installation "Installing ALM on Linux Systems" on page 67
Start ALM "Starting ALM" on page 88
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 17 of 162
Installation Step Instructions
Project Upgrade l "Deactivate and Remove Projects from Existing
ALM/Quality Center Installation" on page 118
l "Copy Project Database Schemas to the New Database
Server Machine" on page 119
l "Restore ALM Projects in New Site Administration
Database Schema" on page 119
l "Upgrade Projects" on page 121
l "Migrating the Project Repository" on page 125
l LoadRunner Enterprise / LAB_PROJECT Post-Upgrade
Steps
Manage ALM l "Managing the ALM Application Server" on page 99
l "Customizing System Files" on page 111
Troubleshoot the
Installation
"Troubleshooting the ALM Installation" on page 131
Upgrade ALM with Same Database Server
The table below lists the steps for the following scenario:
l Upgrading ALM to a new version
l Linux
l Oracle database
l New ALM server
l Same database server
l New Site Administration schema
Installation Step Instructions
Prerequisites l "Prerequisites: Linux Operating Systems" on page 28
l "Prerequisites: Oracle Database Servers" on page 31
l "Prerequisites: General" on page 42
l "Prerequisites: Client-side" on page 44
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 18 of 162
Installation Step Instructions
Project Upgrade
Prerequisites
l "Back Up Projects in Existing ALM Installation" on
page 49
l "Verifying Domains and Projects" on page 50
l "Upgrade Preparation Troubleshooting" on page 136
l "Repairing Domains and Projects" on page 55
l "Restoring Backed Up Projects and Repositories" on
page 58
Installation "Installing ALM on Linux Systems" on page 67
Start ALM "Starting ALM" on page 88
Project Upgrade l "Deactivate and Remove Projects from Existing
ALM/Quality Center Installation" on page 118
l "Restore ALM Projects in New Site Administration
Database Schema" on page 119
l "Upgrade Projects" on page 121
l LoadRunner Enterprise / LAB_PROJECT Post-Upgrade
Steps
Manage ALM l "Managing the ALM Application Server" on page 99
l "Customizing System Files" on page 111
Troubleshoot the
Installation
"Troubleshooting the ALM Installation" on page 131
Installation and Upgrade Guide - Linux
Installation Overview
ALM (16.00-16.0.1) Page 19 of 162
Patch Installation
Installing ALM Patches
This chapter provides general instructions for installing and uninstalling ALM
patches.
l Minor-minor patches
Patches that are new minor-minor versions (for example ALM 12.01) do not
necessarily contain changes to project database schemas. However, they
cannot be rolled back once installed. For details about the Micro Focus version
numbering scheme, refer to the Application Lifecycle Management
Administrator Guide.
l Patches with changes to project database schemas
Patches that include changes to project database schemas upgrade ALM to a
new minor-minor version (for example ALM 11.50 to ALM 11.52.) When installing
such a patch, ALM automatically upgrades projects to the new minor-minor
version. For details about the Micro Focus version numbering scheme and
automatic upgrade of projects to a new minor-minor version, refer to the
Application Lifecycle Management Administrator Guide.
To determine if the patch that you are installing changes project database
schemas, refer to the Release Notes.
Caution: Uninstalling patches with changes to project database schemas
is not supported. Before installing a patch with changes to project
database schemas, back up all projects.
Note: Before installing a patch, review the "Installation Considerations:
Linux" on page 67 section for important installation information.
For specific instructions for the patch that you are installing, refer to the Release
Notes.
This section includes:
• Pre-Installation Checks and Considerations 21
• Clustering Configuration 22
• Installing the Patch 22
• Uninstalling the Patch 24
Installation and Upgrade Guide - Linux
Patch Installation
ALM (16.00-16.0.1) Page 20 of 162
Pre-Installation Checks and Considerations
Verify that the patch that you are installing is compatible with your version of ALM.
You can verify the installed version of Micro Focus ALM by going to the
versions.xml file located under /var/opt/ALM/conf
Refer to the patch Release Notes for prerequisite and compatibility information.
This section includes:
• System Requirements 21
• Required Permissions 21
System Requirements
Verify that your ALM server machine meets the ALM system configurations.
Note: For the most up-to-date supported environments, see
http://admhelp.microfocus.com/alm/specs/alm-qc-systemrequirements.htm.
Required Permissions
Verify that you have the required permissions to install ALM on a server machine.
To install an ALM patch on a Linux operating system:
l If the repository is located on a remote machine, the ALM/Quality Center
application server user account must have network access to the remote
repository.
l Your user name cannot include a pound sign (#) or accented characters (such
as, ä, ç, ñ).
Note: The patch installation must be performed by the same user who
performed the full ALM installation.
l You must have the following file system permissions:
l Full read, write, and execute permissions for all the files and directories under
the directory on which ALM is installed. The patch automatically identifies the
installation path. The installation files are used for configuring the server. By
default, the ALM installation files are written to: /root/ALM.
l Full read, write, and execute permissions to the directory on which ALM is
deployed. The patch automatically identifies the deployment directory
Installation and Upgrade Guide - Linux
Patch Installation
ALM (16.00-16.0.1) Page 21 of 162
specified by the user during the initial installation of ALM.
l Full read, write, and execute permissions to the repository directory which
contains the sa and qc directories. The patch automatically identifies the
repository path specified by the user during the initial installation.
l Full read, write, and execute permissions to the installation and configuration
log files directory. Installation and configuration log files are written to:
/var/opt/ALM/log.
l Full read, write, and execute permissions to the file delivery logs. The log files
are written to: /var/log.
l If the file repository is located on a remote machine:
o On the file server machine, share the file repository directory so that the
user running the installation is the owner of the files.
o Clustering. On the ALM machine, or on each cluster node, create a mount
directory that points to the file repository directory.
Clustering Configuration
When deploying ALM over a cluster, you must install the patch on each of the
cluster nodes.
Install the same version of the patch on all nodes, and insert the same repository
and database details that you used on the first node.
You must use the same confidential data passphrase on all nodes.
It is important that you enter the repository path using the exact same characters
on all nodes. For example, you cannot have the path on the first server node
defined as C:\alm\repository and on additional nodes defined as
\\server1\alm\repository. Rather the \\server1\alm\repository path must appear
on every node.
Installing the Patch
Before installing the patch:
1. To prevent loss of files that were added or changed as a result of hot fixes or
customization:
l All files, except for files with a .class extension, that were added or changed
under the <ALM Deployment folder>\webapps\qcbin folder should be
copied to the <ALM Deployment folder>\application\qcbin.war folder,
including the folder tree hierarchy.
Installation and Upgrade Guide - Linux
Patch Installation
ALM (16.00-16.0.1) Page 22 of 162
Note: Do not copy over .class files from the qcbin folder as these files
use a different codebase from the patch.
l Any file added or changed under the <ALM File repository folder>\sa folder
should be copied to the <ALM File repository folder>\customerData
folder, including the folder tree hierarchy.
After installing the patch and updating the deployment with the changes, the
deployment process copies your files back to the qcbin and the sa folders.
Note: If user avatars are lost after a server upgrade, see this KB article.
2. Make sure that all users are logged out of ALM. You can check active
connections from Site Administration, in the Site Connections tab.
3. Check the Readme or Release Notes for the patch to see if it contains
changes to project database schemas. If so:
a. Back up all ALM projects.
b. Set project update priorities (optional). For details, refer to the Micro Focus
Application Lifecycle Management Administrator Guide.
4. Stop the ALM server. Navigate to the <ALM deployment path>/wrapper
directory, and run the following command: HPALM stop.
Caution: If the patch includes an automatic upgrade, be aware that the
upgraded site administration schema refers to the projects in production.
To install the patch:
On your ALM server machine, in the command prompt, type: ./ALM_installer.bin.
Follow the installation and deployment instructions.
Patch installation automatically identifies the installation, deployment, and
repository paths from the properties file that was created during the first
installation of ALM. The file is saved in the following path
/var/opt/ALM/conf/qcConfigFile.properties
If the installation fails, you receive an error message with the cause of the failure
and the path to the log file.
Note: If the patch changes the database schema, the ALM Server
Deployment Wizard prompts you to confirm that you have backed up all
projects before proceeding with the deployment. You are not able to select
Next until you confirm that you have backed up your projects.
Installation and Upgrade Guide - Linux
Patch Installation
ALM (16.00-16.0.1) Page 23 of 162
After the patch is installed, the next time users log in to ALM, new files are
downloaded and installed on the client machines. If file downloads are prohibited
through your browser, you can install these files through the ALM Client MSI
Generator add-in, available on Marketplace.
Uninstalling the Patch
There is no need to uninstall any patch before installing a new patch. For
instructions on uninstalling a patch, refer to "Uninstalling ALM" on page 116.
Installation and Upgrade Guide - Linux
Patch Installation
ALM (16.00-16.0.1) Page 24 of 162
Installation Prerequisites
Pre-Installation Checklist
Review and verify the following checklist before installing ALM. This checklist
outlines the information that you must supply during the installation process. For
detailed prerequisite information, see the chapters in this part that are relevant to
your installation.
Check Information Required
Breaking
changes
Check the changes you must know before you install or
upgrade.
For details, see Breaking changes.
Installation
Machine
l Operating system version
l CPU type
l Free disk space
l Free memory
Note: For the most up-to-date supported
environments, see
http://admhelp.microfocus.com/alm/specs/alm-qcsystem-requirements.htm.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 25 of 162
Check Information Required
Setup Paths l Installation path
l Deployment path
Note:
l You can accept the default paths offered by the
Installation and Configuration wizards, or enter
alternative paths.
l The installation path must not include folders with
accented characters (for example, ä, ç, ñ).
l The installation path and the deployment path
cannot contain non-English characters.
l You must have full permissions on the installation
and deployment directories.
License Key License file
Cluster
Description
l Is clustering used?
l Cluster hosts
Encryption
Passphrases
l Communication security passphrase
l Confidential data passphrase
Note: In a cluster, use the same passphrase on all
nodes.
Application
Server
The port number
Mail Server l Server type
l Server host
l Server port
Demo Project Do you require the Web-based demo application for work
with the Micro Focus Application Lifecycle Management
Tutorial?
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 26 of 162
Check Information Required
Database Server l Database type
l Database version
l Database server name
l Database administrator user name
l Database administrator user password
l Database port
l Oracle service name (Oracle only)
l Default tablespace (Oracle only)
l Temp tablespace (Oracle only)
Site
Administration
l Site administrator user name
l Site administrator password
Existing
ALM/Quality
Center
Installation
If there is an existing Site Administration schema, provide the
following information for the existing version:
l ALM/Quality Center version
l ALM/Quality Center host
l Confidential data passphrase
l Database server name
l Database administrator user name
l Database administrator password
l Site Administration database schema name
l Site Administration database schema password
l Repository folder location
l Site administrator user name
l Site administrator password
Repository Repository folder location
Java (JDK /JRE) Install Java on the ALM server. For details, see "Java
Installation" on page 43.
Note: When working in a cluster environment, it is
highly recommended to install the same version of
JDK/JRE on each node.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 27 of 162
Prerequisites: Linux Operating Systems
This chapter provides an overview of the prerequisites for installing ALM on a Linux
operating system.
This chapter includes:
• System Configurations: Linux 28
• Required Permissions: Linux 28
• Minimum Disk Space Requirements 29
• Clustering: Linux 30
• ALM Repository Path: Linux 30
System Configurations: Linux
Verify that your server machine meets the ALM system configurations.
Note: For the most up-to-date supported environments, see
http://admhelp.microfocus.com/alm/specs/alm-qc-systemrequirements.htm.
Consider the following for implementing ALM configurations:
l Verify that you have a supported kernel by running uname -a.
l ALM can be deployed on a VMware ESX/ESXi server according to the VMWare
guest operating system compatibility matrix.
Required Permissions: Linux
The following permissions are required:
l Verify that you have the required permissions to install ALM on a server machine.
l If you are upgrading from a previous version of ALM/Quality Center with a
remote repository, the ALM/Quality Center application server user account must
have network access to the remote repository. For details. contact your network
administrator.
l Your user name cannot include a pound sign (#) or accented characters (such
as, ä, ç, ñ).
Note: All related installation operations for the same version, such as
patch installations or uninstalling ALM, must be performed by the same
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 28 of 162
user.
l To install ALM, you must have the following file system permissions:
l Full read, write, and execute permissions for all the files and directories under
the directory on which ALM is installed. The installation files are used for
configuring the server. By default, the ALM installation files are written to:
/root/ALM.
l Full read, write, and execute permissions to the directory on which ALM is
deployed. The deployment directory is specified by the user during
installation.
l Full read, write, and execute permissions to the repository directory, which
contains the sa and qc directories. The repository path is specified by the user
during installation. By default, it is located under the ALM deployment
directory. For details on the repository, refer to the Micro Focus Application
Lifecycle Management Administrator Guide.
l Full read, write, and execute permissions to the installation and configuration
log files directory. Installation and configuration log files are written to
/var/opt/ALM/log.
l Full read, write, and execute permissions to the file delivery logs. The log files
are written to: /var/log.
l If the file repository is located on a remote machine:
o On the file server machine, share the file repository directory so that the
user running the installation is the owner of the files.
o On the ALM machine, or on each cluster node, create a mount directory that
points to the file repository directory.
Minimum Disk Space Requirements
The following partitions have minimum disk space requirements:
l Installation path (default is /root/ALM). Requires at least enough free space to
accommodate the size of ALM after it has been installed. The approximate size
of an installation is 1.2GB, though the exact amount of space may vary from
installation to installation.
l Deployment path. Requires at least enough free space equal to the space on the
installation DVD, approximately 800MB. A copy of the installation is stored in this
partition.
l /tmp. Requires a large amount of free space. The exact amount cannot be
specified as this partition is also consumed by the operating system. It is
advisable that the amount of free space is equal in size to ALM after it has been
installed, which is approximately 1.2GB.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 29 of 162
Also, the User Process Resource Limits must be set to 4096. Edit /etc/profile and
add the following line at the end of the file:
ulimit -n 4096
Clustering: Linux
Check with your system administrator whether you are installing ALM on a single
node or as a cluster.
If you are installing ALM on cluster nodes, verify which machine to use as the first
node to start the installation and the number of machines you should use. This
depends on the number of users and availability considerations.
When installing on additional nodes:
l ALM version. You must install the same version of on all nodes.
l Operating System. You must install the same version of the operating system,
including all patches, updates, or hot fixes, on all nodes.
l Site Administration schema. All nodes must point to the Site Administration
schema.
l Database details. All nodes must be configured with the same database
information.
l Confidential Data Passphrase. You must use the same Confidential Data
Passphrase on all nodes.
l Repository path. You must mount the file system repository before you start the
installation process. The mount should not use any cache mechanisms. For
details, contact your network administrator.
All nodes must mount the shared file server with the same mount name. For
example, if the file server is some.server.org, and it is mounted on /mnt/some_
server on the first node, it should be mounted with /mnt/some_server on all
nodes.
l Java Installation. It is highly recommended to install the same version of
JDK/JRE on each node.
ALM Repository Path: Linux
The location of the repository directory is specified by the user during installation.
You must have full control permissions to the ALM repository path as described in
"Required Permissions: Linux" on page 28.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 30 of 162
Prerequisites: Oracle Database Servers
This chapter provides an overview of the prerequisites for connecting ALM to an
Oracle database server.
This chapter includes:
• Connecting ALM to an Oracle Database Server 31
• Site Administration Database Schema Considerations: Oracle 36
• Oracle RAC Support 37
• Oracle JDBC Driver TNSNAME and Parameters Support 38
Connecting ALM to an Oracle Database Server
Verify the following:
Database type and
version
Verify that ALM supports your database type and
version.
Note: For the most up-to-date supported
environments, see
http://admhelp.microfocus.com/alm/specs/almqc-system-requirements.htm.
Database server
name
Verify the name of the database server.
Database user
permissions
Verify that you have the database permissions required
to install ALM on the Oracle database server. For a list
of required permissions, see "User Permissions for
Connecting ALM to an Oracle Database Server" on the
next page.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 31 of 162
Site Administration
database schema
To install ALM on an existing Site Administration
database schema (second node or upgrade), you must
have:
l The existing database schema name and the
database administrator permissions required to
connect ALM to the database server.
l Full read/write permissions on the existing
repository.
l ALM must have access to the previous Site
Administration schema repository path.
l Full read/write permissions for the ALM user to the
previous schema repository path.
l The Confidential Data Passphrase that was used to
create the existing schema.
For schema name and password considerations, see
"Site Administration Database Schema
Considerations: Oracle" on page 36.
Database tablespace
name and size
l Verify the name of the database server, and check
the connection to the database server. Ping the
database server machine name to test DNS
resolution.
l Verify you have the tablespace names (default and
temporary) and the minimum tablespace sizes for
storing the Site Administration database schema.
l Verify that the tablespace is not locked.
Database Column
Length Semantics
For Unicode databases, ensure that column length
(NLS_LENGTH_SEMANTICS) is defined according to
characters (CHAR), and not according to bytes (BYTE,
the default option).
This section also includes:
• User Permissions for Connecting ALM to an Oracle Database Server 32
User Permissions for Connecting ALM to an Oracle Database
Server
To connect ALM to an Oracle database server, the installing database user must
have sufficient permissions to perform certain administrative tasks in Oracle.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 32 of 162
These tasks include creating the ALM project user schema, copying data between
projects, and checking that there is sufficient storage in a specific tablespace.
We recommend that your database administrator create an ALM database
administrative user, for example qc_admin_db, with the specific privileges
required to install ALM.
Your database administrator can create an ALM database administrative user
using a script, see Creating DB administrative user required for ALM installation.
This script creates the ALM database administrative user with the recommended
grants required on the database. Your database administrator should run the script
and create this user on the staging database server.
Note: The privileges of the Oracle database user "system" changed after
version 12c. If you are working with Oracle Database versions later than 12c,
make sure you create an ALM database administrative user by following
Creating DB administrative user required for ALM installation and grant the
necessary privileges. For details on the required privileges, see "Database
Administrative User Privileges" below.
This section includes:
• Database Administrative User Privileges 33
• Project User Privileges 36
Database Administrative User Privileges
Following are the privileges required by the ALM database administrative user.
Additional explanations about these privileges can be found in the notes at the end
of the table.
Privilege Description
CREATE
SESSION WITH
ADMIN OPTION
(1)
ALM uses this privilege to connect to the database as the
ALM database administrative user.
CREATE USER Required to create a new project user schema when creating
a new ALM project.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 33 of 162
Privilege Description
DROP USER When deleting an ALM project, ALM attempts to remove the
Site Administration database schema from the database
server. If there is an insufficient privileges error, ALM ignores
the error and requests that the user notify the database
administrator to delete (drop) the database user schema.
CREATE TABLE
WITH ADMIN
OPTION (1)
Required for granting this permission to a newly created ALM
project user schema.
CREATE VIEW
WITH ADMIN
OPTION (1)
Required to create views for ALM projects.
CREATE
TRIGGER WITH
ADMIN OPTION
(1)
Required to create triggers for ALM projects. ALM uses
database triggers to collect change history for specific
tables.
CREATE
SEQUENCE
WITH ADMIN
OPTION (1)
Required to create sequences for ALM projects.
CREATE
PROCEDURE
WITH ADMIN
OPTION (1)
Required to create stored packages for ALM projects. ALM
uses packages to collect change history for specific tables.
CTXAPP ROLE
WITH ADMIN
OPTION (1)
Enables ALM to use the Oracle text searching feature. This
role exists only if the Oracle text search component was
installed and enabled on the database server.
SELECT ON
DBA_FREE_
SPACE (2)
Required to check free space on the database server prior to
creating a new Site Administration database schema or a
new project.
SELECT ON
SYS.DBA_
TABLESPACES
(2)
Required to collect a list of tablespaces that exist on the
database server prior to creating a new Site Administration
database schema or a new project.
SELECT ON
SYS.DBA_
USERS (2)
Required to verify the existence of specific database project
users. For example, you might want to verify the existence of
an Oracle CTXSYS user before creating a new ALM project.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 34 of 162
Privilege Description
SELECT ON
SYS.DBA_
REGISTRY (2)
Required to verify that the text search component is installed
on the database server.
SELECT ON
SYS.DBA_ROLES
(2)
Required to verify that the text search role (CTXAPP) is
installed on the database server.
SELECT ANY
TABLE WITH
ADMIN OPTION
(1)
and
INSERT ANY
TABLE
Required for various administrative operations when
upgrading the Site Administration database schema during
installation using the copy and upgrade method, and for
enhancing performance when copying a project that has the
same source and target database server.
Note:
l
(1) An ALM database administrative user must have privileges with Admin
Option.
l
(2) The SELECT ON SYS privileges can be given directly by the table
owner, or through a database application role. To avoid giving these
privileges each time, you can grant this role to the ALM database
administrative user. The recommended name for this role is QC_SELECT_
ON_SYS_OBJECTS. You should run this script before you run the qc_
admin_db___oracle.sql script.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 35 of 162
Project User Privileges
When creating a new project, ALM creates a project user schema. This user
schema hosts all the tables that are used by the project for storing and retrieving
data. Following are the required privileges for an ALM project user schema:
Project User
Schema
Privilege Description
QUOTA
UNLIMITED ON
<default
tablespace>
Required for creating database objects that are owned by the
ALM project user schema. This privilege allows users to
create tables in the default tablespace. It replaces the
UNLIMITED TABLESPACE system privilege that gave users
system privileges to create tables in any tablespace,
including the SYSTEM tablespace.
CREATE
SESSION
ALM uses this privilege to connect to the database user
schema to perform required operations. For example creating
database objects such as tables, and using them to insert,
retrieve, and delete data.
l CREATE
TABLE
l CREATE VIEW
l CREATE
TRIGGER
l CREATE
SEQUENCE
l CREATE
PROCEDURE
l CTXAPP Role
For a description of these privileges, see "Database
Administrative User Privileges" on page 33.
Site Administration Database Schema
Considerations: Oracle
Be aware of the following schema name and password considerations:
l The default Site Administration database schema name is qcsiteadmin_db. If
you want to rename the schema, you can change the name when configuring the
ALM installation.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 36 of 162
Note: The Site Administration database schema name can only contain
English characters or numbers.
l You can create your own ALM user password for accessing the Site
Administration database schema.
l If there is an existing Site Administration database schema, you can create a
copy of the existing schema and upgrade the copy. This enables you to work
with ALM 16.00 and previous versions of ALM/Quality Center simultaneously.
Oracle RAC Support
Oracle RAC is a way to enhance Oracle database availability and scalability,
allowing it to interact with more than one database instance.
ALM RAC support includes:
l Load balancing between Oracle instances.
l Failover between all specified Oracle RAC nodes at initial connection.
ALM RAC support does not include:
l TAF (Transparent Application Failover) support. A user failing to complete a
request upon an Oracle instance crash is required to perform the activity again
with a working Oracle instance.
To enable Oracle RAC support:
1. Verify that a file containing information of Oracle database addresses is saved
on your ALM machine. The file is named tnsnames.ora. The file should contain
information similar to the following examples:
a. This first example shows an RAC TNS Alias using all cluster nodes in the
ADDRESS sub-section and a sample of utilizing the Load balance and
Failover features:
Example:
OrgRAC =
(DESCRIPTION =
(ADDRESS_LIST=
(FAILOVER = on)
(LOAD_BALANCE = on)
(ADDRESS= (PROTOCOL = TCP)(HOST = server1)(PORT = 1521))
(ADDRESS= (PROTOCOL = TCP)(HOST = server2)(PORT = 1521))
(ADDRESS= (PROTOCOL = TCP)(HOST = server3)(PORT = 1521))
)
(CONNECT_DATA=
(SERVICE_NAME = myrac.yourcompany.com)
)
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 37 of 162
)
b. This second example shows an RAC TNS Alias using Single Client Access
Name (SCAN). This enables Oracle 11gR2 clients to connect to the database
with the ability to resolve multiple IP addresses, reflect multiple listeners in
the cluster and handle public client connections. For details on working with
RAC SCAN, refer to the Oracle documentation.
Example:
OrgRAC_Scan =
(DESCRIPTION =
(ADDRESS_LIST=
(FAILOVER = on)
(LOAD_BALANCE = on)
(ADDRESS= (PROTOCOL = TCP)(HOST = myrac-cluster-scan)(PORT = 1521))
(CONNECT_DATA=
(SERVICE_NAME = myrac.yourcompany.com)
)
)
2. Verify that you have the address of the TNS server to which ALM should refer,
for example, OrgRAC.
Oracle JDBC Driver TNSNAME and Parameters
Support
To support Oracle JDBC parameters, you can append the options to the JDBC
connection URL in the form of ;<oracle_jdbc_propertie>=<propertie_value>;.
For example, to use TNSNAME:
jdbc:oracle:thin:@OrgRAC;oracle.net.tns_admin=<path of tnsnames
folder>
Prerequisites: Microsoft SQL Database
Servers
This chapter provides an overview of the prerequisites for connecting ALM to a
Microsoft SQL database server.
This chapter includes:
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 38 of 162
• Connecting ALM to a Microsoft SQL Database Server 39
• User Permissions for Connecting ALM to a Microsoft SQL Database Server 40
• Site Administration Database Schema Considerations: SQL 42
Connecting ALM to a Microsoft SQL Database
Server
Verify the following:
Database type and
version
Verify that ALM supports your database type and
version.
Note: For the most up-to-date supported
environments, see
http://admhelp.microfocus.com/alm/specs/almqc-system-requirements.htm.
Database server
name
Verify the name of the database server.
Database user
permissions
Verify that you have the database permissions required
to connect ALM to the Microsoft SQL database server
(not applicable for Windows Authentication). For a list
of required permissions, see "User Permissions for
Connecting ALM to a Microsoft SQL Database Server"
on the next page.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 39 of 162
Site Administration
database schema
To install ALM on an existing Site Administration
database schema (second node or upgrade), you must
have:
l The existing database schema name and the
database administrator permissions required to
connect ALM to the database server.
l Full read/write permissions on the existing
repository.
l ALM must have access to the previous Site
Administration schema repository path.
l Full read/write permissions for the ALM user to the
previous schema repository path.
l The Confidential Data Passphrase that was used to
create the existing schema.
For schema name and password considerations, see
"Site Administration Database Schema Considerations:
SQL" on page 42.
Text Search Verify that the text search component is installed on
the server, even if you do not intend to use it.
User Permissions for Connecting ALM to a
Microsoft SQL Database Server
To connect ALM to a Microsoft SQL database server, the installing database user
must have sufficient permissions to perform certain administrative tasks in SQL.
If you have the SQL sa login, you can use it to install ALM. If you are unable to use
the SQL sa login due to security reasons, we recommend that your database
administrator create an ALM database administrative login, for example td_db_
admin, with the specific privileges required to install ALM.
The td_db_admin login must have the Database Creators role. You must also grant
the td_db_admin login the Security Administrators role. This allows the td_db_
admin login to create and add the td user with only those privileges required for
running ALM, and to run the Maintain Project activities, such as Verify, Repair, and
Update.
Note: If you are unable to grant the Database Creators and Security
Administrators roles, you can grant specific privileges for the database
administrative login. For details, see Creating DB administrative user
required for ALM installation.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 40 of 162
To create an ALM database administrative login on a Microsoft SQL Server:
1. Open the SQL Server Management Studio.
2. In the Object Explorer pane, under the ALM database server, expand the
Security folder.
3. Right-click the Logins folder, and select New Login.
4. Type td_db_admin as the login name, and select the authentication type (enter
password if necessary).
5. Click the Server Roles tab, and select the dbcreator and securityadmin
options.
6. Click OK.
To test the ALM database administrative login after connecting via this login
(SQL Server Authentication):
1. Verify the select sysdatabases table permission in the master database:
SELECT name FROM sysdatabases where name=<db_name>
2. Verify the create database permission:
CREATE DATABASE <dbName> -- the database name must not already
exist
3. Verify the drop database permission:
DROP DATABASE <database_name> -- the database name must exist
4. Verify the select syslogins permission:
SELECT COUNT(*) FROM master..syslogins WHERE name=<dbOwnerName>
Note: The dbOwnerName must be set to td.
To test the ALM database administrative login permissions after connecting
via this login (Windows Authentication):
1. Verify the change database context permission:
USE <dbName>
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 41 of 162
2. Verify the create database permission:
CREATE DATABASE <dbName> -- the database name must not already
exist
3. Verify the select on syslogins permission:
SELECT COUNT(*) FROM master..syslogins WHERE
name='<dbOwnerName>'
4. Verify the select on sysusers permission:
SELECT COUNT(*) FROM master..sysusers WHERE name='<dbOwnerName>'
Site Administration Database Schema
Considerations: SQL
Be aware of the following schema name and password considerations:
l The default Site Administration database schema name is qcsiteadmin_db. If
you want to rename the schema, you can change the name when configuring the
ALM installation.
Note: The Site Administration database schema name can only contain
English characters or numbers.
l You can create your own ALM user password for accessing the Site
Administration database schema.
l If there is an existing Site Administration database schema, you can create a
copy of the existing schema and upgrade the copy. This enables you to work
with ALM 16.00 and previous versions of ALM/Quality Center simultaneously.
Prerequisites: General
This chapter provides an overview of various prerequisites for installing ALM.
This chapter includes:
• License Activation 43
• Security Passphrases 43
• Mail Server Information 43
• Java Installation 43
• Conflicting Applications 44
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 42 of 162
License Activation
To activate your license go to the Software Licenses and Downloads Portal using
one of the following links:
l https://entitlement.microfocus.com
l https://entitlement.mfgs.microfocus.com for US Government Solutions
For further support, go to one of the following links:
l https://entitlement.microfocus.com/mysoftware/contact/softwareContact
l https://entitlement.mfgs.microfocus.com/mysoftware/contact/softwareContact
for US Government Solutions
Security Passphrases
Verify that you have passphrases for confidential data and communication security
encryption.
For secondary cluster nodes, verify that you have the confidential data encryption
passphrase that you used to install the primary cluster.
You must use the same confidential data passphrase as was used for the previous
installation.
Mail Server Information
A mail server enables ALM users to send emails to other users in a project. You
select which server to use as part of the installation configuration process.
Before installing ALM, decide which mail server to use. Ask your system
administrator for assistance. If you are using an SMTP Server, check that you have
the SMTP Server name and port. The installer checks that the specified mail server
name and port are valid and that the mail server is running.
Java Installation
ALM requires Java Development Kit (JDK) or Java Runtime Environment (JRE) to
be installed prior to installing ALM (only x64 is supported).
Note: When working in a cluster environment, it is highly recommended to
install the same version of JDK/JRE on each node.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 43 of 162
Oracle Java JDK or JRE
Download and install JDK or JRE from the following URL:
http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads2133155.html.
OpenJDK 8
1. Download from the following URL: https://adoptopenjdk.net/releases.html.
2. Unzip the OpenJDK file to a folder.
3. Add java bin path to /etc/profile and save (for example: export PATH=
/home/jdk8u172-b11/bin:$PATH).
4. Run source /etc/profile.
5. To verify that Java was installed correctly, run java –version.
Conflicting Applications
To work with ALM, you may need to disable conflicting applications that are
running on the ALM machine. For a list of these applications, see this KB article.
Prerequisites: Client-side
This chapter provides an overview of the prerequisites for working with ALM on a
client machine. The steps described in this chapter are performed on the client
machines, and not on the machine on which ALM server is installed.
This chapter includes:
• System Configurations 44
• Permissions Required to Download ALM Client Components 45
• Internet Explorer Configuration 45
System Configurations
Verify that client machines meet the ALM system configurations see
http://admhelp.microfocus.com/alm/specs/alm-qc-system-requirements.htm.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 44 of 162
Additional Considerations
The following considerations must also be taken into account:
l If you are integrating ALM with other Micro Focus testing tools, you must modify
the DCOM permissions on your client machine. For details, see this KB article.
ALM Edition: Modifying DCOM permissions is not required for running
Functional test sets (server-side test execution).
l You can work with the ALM client using a remote desktop.
l For customers using remote or mass distribution mechanisms, ALM client
components can be deployed locally on client machines by running a selfextracting msi file. You build the msi file by running the ALM Client MSI
Generator, available from Marketplace.
Permissions Required to Download ALM Client
Components
To enable ALM to work with Micro Focus testing tools as well as various other
integrations and third-party tools, you need to log in to the client machine with
administrator privileges. These privileges are required to install the ALM Client
Registration add-in, which you use to register ALM client components and Site
Administration client components on your client machine.
File System Permissions
You must have the following file system permissions:
l Full read and write permissions on the HP\ALM-Client deployment folder. This is
located at %ALLUSERSPROFILE%.
l Full read and write permissions to the Temp (%TEMP% or %TMP%) directory.
The installer program writes installation and log files to this directory. This is
generally located at C:\Users\<username>\AppData\Local\Temp.
Internet Explorer Configuration
Before you download Application Lifecycle Management on a client machine, you
must perform the following configurations to the Internet Explorer browser on the
client machine.
l Configure the Custom Level security settings. The Custom Level security setting
should be configured for the specific zone of the ALM server.
l Set Internet Explorer as the default Web browser. This ensures that external
links to ALM entities can open in ALM.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 45 of 162
To configure security settings on the client machine:
1. In Internet Explorer, select Tools > Internet Options. The Internet Options
dialog box opens.
2. Click the Security tab. The Web content zone of the ALM server (Internet or
Local intranet) is automatically selected. Click Custom Level.
3. In the Security Settings dialog box, configure the following settings:
Under .NET Framework-reliant components:
l Set Run components not signed with Authenticode to Enable.
l Set Run components signed with Authenticode to Enable.
Under ActiveX controls and plug-ins:
l Set Run ActiveX controls and plug-ins to Enable.
l Set Download signed ActiveX controls to Enable or Prompt.
Note: You do not need to enable Download signed ActiveX controls
if you install the ALM client using the ALM Client MSI Generator Add-in.
This allows you to install all ALM modules on a client machine without
downloading them through a browser.
4. Click OK.
To set Internet Explorer as the default web browser:
1. In Internet Explorer, select Tools > Internet Options. The Internet Options
dialog box opens.
2. Click the Programs tab.
3. Under Default web browser, make sure that Internet Explorer is set as the
default browser. If not, click the Make default button.
Installation and Upgrade Guide - Linux
Installation Prerequisites
ALM (16.00-16.0.1) Page 46 of 162
Pre-Installation Project Upgrade
Steps
Project Upgrade Considerations
If you are upgrading from an earlier version of ALM/Quality Center, this chapter
presents project upgrade considerations to be taken into account before installing
ALM 16.00.
Note: For upgrade troubleshooting details, see "Upgrade Preparation
Troubleshooting" on page 136.
This section includes:
• Upgrade Versions 47
• Suggested ALM System Configuration 48
Upgrade Versions
The following table describes how to upgrade projects from previous Quality
Center and ALM versions.
From version: Latest version to support direct upgrade
ALM 11.0 ALM 12.2
ALM 11.5x ALM 12.5
ALM 12.0 ALM 15.0
ALM 12.2x - 15.0.x ALM 15.5
ALM 12.5x - 15.xx ALM 16.00
Caution: Before performing any upgrade, the current repository must be
moved to the correct location for the new version.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 47 of 162
Suggested ALM System Configuration
The ALM system includes the following main components: The ALM server, the
database server, and the project repository. For details regarding the function of
each component within the ALM system, see "About ALM Technology and
Architecture" on page 9.
When planning your installation and upgrade strategy, decide whether to install the
new ALM system on new system components, or to reuse components from the
existing system.
It is strongly recommended that you not use any of the existing components as
part of the new system.
l ALM server. To install the new version of the ALM server on the same machine
where the existing ALM server is installed, first reformat or reinstall the
machine's operating system. You can also uninstall the old version of ALM. For
more details on uninstalling ALM, see "Uninstalling ALM" on page 116.
l Database server. Install an updated version of the database server on a
separate machine, or create a new instance of the existing server on the
machine on which it is currently installed.
l Project Repository. Create a copy of the existing repository to be used by the
new system.
Advantages
Following this best practice produces two functioning ALM systems:
l The original system that can open and work with existing projects.
l The new system to which existing projects will be upgraded.
Each system is totally separate, and any problem encountered in one does not
impact the other.
This best practice has the distinct advantage of enabling you to incrementally
upgrade your projects. Since there are two functioning ALM systems, there is no
need to deactivate all projects at once. You can deactivate projects individually in
the old system, back them up, and then reactivate them in the new system,
upgrading them one-by-one. Without two functioning ALM systems, all projects
would remain inactive until their upgrades are complete, a significant amount of
project downtime.
Note: Before beginning the upgrade process you must back up the database
server and the project repository. Continuing to work in the old ALM system
after backing up causes the backup to be out of date.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 48 of 162
The following are two examples of critical problems that may arise when you do
not follow the suggested upgrade approach:
l Unnecessary project downtime. If a project becomes corrupted before you
complete its upgrade, there will be no option but to retrieve a backup copy of it.
Depending on organizational policy this process may take a few days, meaning
that the project is not available at all for this amount of time.
If the original ALM system is functioning however, you can go back to a working
version of the project immediately and not be dependent on waiting for the
backup to arrive, thus avoiding unnecessary project downtime.
l Damaged project repository. If you install the new version of the ALM server on
the same machine, you must first uninstall the existing ALM server. It is possible
that you may subsequently discover a problem with the project repository that
requires the original ALM server to repair it.
Your only course of action is to:
a. Uninstall the new version.
b. Reinstall the old version.
c. Fix the project repository.
d. Uninstall the old version.
e. Reinstall the new version.
Project Upgrade Pre-Installation Activities
This chapter describes project upgrade steps that must be performed before
installing ALM 16.00
This section includes:
• Back Up Projects in Existing ALM Installation 49
• Verifying Domains and Projects 50
• Repairing Domains and Projects 55
• Restoring Backed Up Projects and Repositories 58
• Verify Projects Again 60
• Copy Site Administration Database Schema to the New Database Server 61
Back Up Projects in Existing ALM Installation
Back up all your projects in the existing ALM installation. Projects should be backed
up before running the verify and repair tools.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 49 of 162
When you run the repair or upgrade process, ALM performs changes on your
projects to align them with the specifications for the current version of ALM. You
must back up your projects before you start to repair or upgrade them.
We strongly recommend that you deactivate projects before backing them up. If
you must back up while your project is still active, you must back up the database
before the file system. We also recommend backing up the file system as soon as
possible after backing up the database. To back up and restore data from active
projects, see this KB article.
Note:
l The repair process makes changes to the project database schema only.
Before running the repair process, you should back up the project
database schema on the database server, and you should back up the
project data in the file system.
l Before you run the upgrade process, perform a full backup of your projects
that includes the project database schema and the project repository.
l Version Control: Version control enabled projects cannot be backed up
while there are checked out entities. All entities must be checked in to the
corresponding version of Quality Center or ALM. To determine if there are
checked out entities, see this KB article.
To back up the project database schema on the database server:
l Microsoft SQL database. To back up the project database schema on the
database server, see this KB article.
l Oracle database. To back up the project database schema on the database
server, see this KB article.
Verifying Domains and Projects
Verify all projects in the existing ALM installation.
The verify and repair process checks that the project schema structure and data
integrity are correct for the existing version of ALM. It is important to verify this
before proceeding with the new installation, since the projects on the old server
should be aligned prior to upgrade.
You can run the verify tool per individual project, or on the domain level to verify all
projects in the domain.
This section includes:
• Verification Process Overview 51
• Define an Exception File 51
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 50 of 162
• Verify a Project 53
• Verify a Domain 54
Verification Process Overview
The verification process:
l Checks the correctness of the database user schema and data in a project.
l Detects problems in your environment, settings, schema structure, and data
integrity that could cause the upgrade to fail.
l Generates a verification report which alerts you to problems that can be repaired
by ALM and problems that you should manually repair.
By default, the verification report is saved on the ALM server machine. To change
this default location, refer to the Micro Focus Application Lifecycle Management
Administrator Guide.
Define an Exception File
If you have made changes to a project database user schema such as the addition
of tables or columns, the verification, repair, or upgrade processes may fail. You
can define an exception file for objects that are added manually to the database
user schema, and are not defined in the schema configuration file. This instructs
ALM to ignore these changes.
You can use the exception file to ignore warnings for extra tables, views, columns,
and sequences. For any other problem that requires manual repair, consult with
your database administrator.
You must use the same exception file when running the verification, repair, or
upgrade processes.
You can set an exception file for a single project or for all projects in Site
Administration.
Caution: Using the exception file to ignore warnings for objects that are
added manually to the schema may compromise the stability of your project
upgrade and the validity of the database user schema.
To define an exception file:
1. Copy the SchemaExceptions.xml file from the ALM installation directory. By
default, the file is located in <ALM installation
path>\ALM\data\sa\DomsInfo\MaintenanceData.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 51 of 162
2. Create the exception file, for example, my_exceptions.xml, and define the
exceptions as follows:
l For an extra table:
<TableMissing>
<object pattern="MY_Table" type="extra"/>
</TableMissing>
l For an extra view:
<ViewMissing>
<object pattern="MY_VIEW" type="extra"/>
</ViewMissing>
l For an extra column:
<ColumnMissing>
<object pattern="MY_COLUMN" type="extra"/>
</ColumnMissing>
l For an extra sequence:
<SequenceMissing>
<object pattern="MY_SEQUENCE" type="extra"/>
</SequenceMissing>
3. To set an exception file for a single project:
a. In Site Administration, click the Site Projects tab.
b. In the Projects list, select a project. In the right pane, select the Project
Details tab. The project's details are displayed.
c. Under Project Database, click Exception File. The Edit Exception File
dialog box opens.
d. Type the file location. The file is located under <<Repository
path>\sa\DomsInfo\MaintenanceData.
4. To set an exception file for all projects:
a. In Site Administration, click the Site Configuration tab.
b. Add the UPGRADE_EXCEPTION_FILE parameter to the list of parameters
and define the exception file location. A template example of an empty file is
located under <Repository path>\sa\DomsInfo\MaintenanceData.
For details, refer to the Micro Focus Application Lifecycle Management
Administrator Guide.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 52 of 162
Verify a Project
This section describes how to verify a single project.
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a project.
3. Click the Maintain Project button and choose Verify Project. The Verify
Project dialog box opens.
4. Click the Verify Project button to start the verification process. In the Verify
Results pane, log messages are displayed.
If a database error occurs while running the process, a message box opens.
Click the Abort or Retry buttons, based on whether you can correct the
problem described in the message box.
5. To pause the verification process, click the Pause button. To continue, click
the Resume button.
6. To abort the verification process, click the Abort button. Click Yes to confirm.
7. To save the messages displayed in the Verify Results pane to a text file, click
the Export Log button. In the Export Log to File dialog box, choose a location
and type a name for the file. Click Save.
8. To clear the messages displayed in the Verify Results pane, click the Clear Log
button.
9. When the verification process completes, the Verify Results pane displays the
location of the verification report. The file is located in the following directory:
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 53 of 162
<ALM Repository Path>\sa\DomsInfo\MaintenanceData\out\<Domain
Name>\<Project Name>.
10. Analyze the verification report. The report indicates both problems that can be
repaired by ALM automatically, and the problems that you need to repair
manually.
11. Click Close to close the Verify Project dialog box.
Verify a Domain
This section describes how to verify all projects in a domain.
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a domain.
3. Click the Maintain Domain button and choose Verify Domain. The Verify
Domain dialog box opens.
4. To view the current version numbers of your projects, select the project
names, or click Select All to view version numbers for all projects. Click the
Display Versions button.
The project version number is displayed in the Version column.
5. To verify your projects, select the project names, or click Select All to verify all
projects. Click the Verify Projects button.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 54 of 162
If a database error occurs while running the process, a message box opens.
Click the Abort or Retry buttons, based on whether you can correct the
problem described in the message box.
6. To pause the verification process, click the Pause button. To continue, click
the Resume button.
7. To abort the verification process, click the Abort button. Click Yes to confirm.
8. To save the messages displayed in the Verify Results pane to a text file, click
the Export Log button. In the Export Log to File dialog box, choose the location
and type the name for the file. Click Save.
9. To clear the messages displayed in the Verify Results pane, click the Clear Log
button.
10. When the verification process completes, the Verify Results pane displays the
location of each verification report. The files are located in the following
directory: <ALM Repository
Path>\repository\sa\DomsInfo\MaintenanceData\out\<Domain
Name>\<Project Name>.
11. Analyze the verification report. The report indicates problems that can be
repaired by ALM and the problems that you need to repair manually.
12. Click Close to close the Verify Domain dialog box.
Repairing Domains and Projects
The repair process fixes most data and schema issues found by the verification
process. If the verification process finds problems that can cause data loss, the
repair process does not fix these automatically. You need to repair these problems
manually. To find out whether a particular issue is handled automatically or
manually, refer to the verification report.
By default, the repair process runs in non-silent mode. When running the process
in non-silent mode, ALM may pause and prompt you for input when an error
occurs. Instead, you can choose to run the process in silent mode. When an error
occurs, ALM aborts the process without prompting you for input.
For detailed information on the problems fixed by the repair process, and help with
repairing problems that cannot be fixed by ALM, see "Upgrade Preparation
Troubleshooting" on page 136.
This section includes:
• Repairing a Project 56
• Repairing a Domain 57
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 55 of 162
Repairing a Project
This section describes how to repair a single project.
To repair a project:
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a project.
3. Click the Maintain Project button and choose Repair Project. The Repair
Project dialog box opens.
4. To run the repair process without any user interaction, select Run in Silent
Mode.
5. To start the repair process, click the Repair Project button. If the project is
active, you are prompted to deactivate it. For details about deactivating
projects, refer to the Micro Focus Application Lifecycle Management
Administrator Guide.
If a database error occurs while running the process in non-silent mode, a
message box opens. Click the Abort or Retry buttons, based on whether you
can correct the problem described in the message box.
If the repair process fails, see "Restoring Backed Up Projects and Repositories"
on page 58.
6. To pause the repair process, click the Pause button. To continue, click the
Resume button.
7. To abort the repair process, click the Abort button. Click Yes to confirm.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 56 of 162
8. To save the messages displayed in the Repair Results pane to a text file, click
the Export Log button. In the Export Log to File dialog box, choose a location
and type a name for the file. Click Save.
9. To clear the messages displayed in the Repair Results pane, click the Clear Log
button.
10. Click Close to close the Repair Project dialog box.
Repairing a Domain
This section describes how to repair all projects in a domain.
To repair a domain:
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a domain.
3. Click the Maintain Domain button and choose Repair Domain. The Repair
Domain dialog box opens.
4. In the Repair Settings area, under Repair Mode, you can select the following
options:
l Run in Silent Mode. Runs the process without any user interaction.
l Continue to next project if repair failed. Proceeds to the next project if the
repair process fails. This is the default option.
5. In the Repair Settings area, under After the Repair, you can select one of the
following options:
l Leave all projects deactivated. Leaves all projects deactivated after the
repair process completes.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 57 of 162
l Activate only currently active projects. Reactivates previously-activated
projects after the repair process completes. This is the default option.
l Activate all projects. Activates all projects after the repair process
completes.
6. To view the current version numbers of your projects, select the project
names, or click Select All to view version numbers for all projects. Click the
Display Versions button.
The project version number is displayed in the Version column.
7. To repair your projects, select the project names, or click Select All to verify all
projects. Click the Repair Projects button.
If a database error occurs while running the process in non-silent mode, a
message box opens. Click the Abort or Retry buttons, based on whether you
can correct the problem described in the message box.
If the repair process fails, see "Restoring Backed Up Projects and Repositories"
below.
8. To pause the repair process, click the Pause button. To continue, click the
Resume button.
9. To abort the repair process, click the Abort button. Click Yes to confirm.
10. To save the messages displayed in the Repair Results pane in a text file, click
the Export Log button. In the Export Log to File dialog box, choose a location
and type a name for the file. Click Save.
11. To clear the messages displayed in the Repair Results pane, click the Clear Log
button.
12. Click Close to close the Repair Domain dialog box.
Restoring Backed Up Projects and Repositories
If the repair or upgrade process fails, you must restore the backed up projects
before trying the process again. You can restore projects that were backed up on
an Oracle or Microsoft SQL database server, and you can restore project
repositories that were backed up in the file system. A project you restore can be
used only in the ALM/Quality Center version from which it was backed up. Before
restoring the backed up project, you must remove the project from Site
Administration.
If you were previously working with LoadRunner Enterprise 11.00 or later, see
"Restoring LAB_PROJECT" on page 60.
This section includes:
• Restoring Projects from a Microsoft SQL Database Server 59
• Restoring Projects from an Oracle Database Server 59
• Restoring a Repository from the File System 60
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 58 of 162
• Restoring LAB_PROJECT 60
Restoring Projects from a Microsoft SQL Database Server
This section describes how to restore a project backed up on a Microsoft SQL
database server.
For details, see this KB article.
To restore a project from a Microsoft SQL database server:
1. From the SQL Server Enterprise Manager, navigate to the database and select
Tools > Restore Database.
2. Navigate to the backup file, and follow the restore procedure to complete the
data restore process.
3. To align the td user on the new database server, run the following
SQL commands on every restored schema (site administration, lab_project and
each project schema):
EXEC sp_change_users_login 'Report'
EXEC sp_change_users_login 'Update_One', 'td', 'td'
EXEC sp_changedbowner 'td_admin'
Note: td_admin is the database administration user with the appropriate
required database privileges.
4. In Site Administration, restore the project. For details, see "Restore ALM
Projects in New Site Administration Database Schema" on page 119.
5. If the backup was performed while the project was active, realign the project
repository. For details, refer to the Micro Focus Application Lifecycle
Management Administrator Guide.
Restoring Projects from an Oracle Database Server
This section describes how to restore a project backed up on an Oracle database
server.
For details, see this KB article.
To restore a project from an Oracle database server:
1. Copy the backup file to the Oracle server machine.
2. Using the SQL*Plus utility, log in to the Oracle server using the system
account.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 59 of 162
3. Create a user for the ALM project. Make sure you create it with the same name
as the project name (or the Oracle user name) when the project was exported.
Use these SQL statements:
CREATE USER [<project name>] IDENTIFIED BY tdtdtd DEFAULT
TABLESPACE TD_data TEMPORARY TABLESPACE TD_TEMP;
GRANT CONNECT,RESOURCE TO [<project name>];
4. Locate the \Utilities\Databases\Scripts directory. Open the qc_project_db_
oracle.sql file and follow the instructions.
5. Using the command line, type imp to run the import utility.
6. Follow the prompt, and log in to the Oracle server using the system account.
After all tables have been successfully imported, a confirmation message
displays.
Restoring a Repository from the File System
This section describes how to restore a repository backed up in the file system.
To restore a repository from the file system:
1. Copy the backed up repository to the ALM repository.
2. In Site Administration, restore the project. For details, see "Restore ALM
Projects in New Site Administration Database Schema" on page 119.
3. If the backup was performed while the project was active, you must restore the
database and the file system from a backup that was created after the
database backup was created, realign the project, and then activate the
project. This procedure must always be performed during disaster recovery.
For details, refer to the Micro Focus Application Lifecycle Management
Administrator Guide. If this process is done to recover certain files or
directories, you can skip the realignment.
Restoring LAB_PROJECT
Before restoring other LoadRunner Enterprise projects, you must first restore LAB_
PROJECT, and then any LoadRunner Enterprise template projects.
You restore LAB_PROJECT from the Lab Management tab in Site Administration.
For details, refer to the Micro Focus ALM Lab Management Guide.
You restore LoadRunner Enterprise 11.00 or later projects in Site Administration.
Verify Projects Again
Before proceeding, run the verification tool again to make sure that all problems
have been fixed.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 60 of 162
Copy Site Administration Database Schema to
the New Database Server
To upgrade a copy of the Site Administration database schema on a new database
server machine, you must copy the schema from the database server that was
used in the previous ALM system to the database server that will be used in the
new ALM system.
You perform this step before installing ALM 16.00 because the schema upgrade
option is defined as part of the installation configuration.
Perform the required steps for backing up, removing, and restoring databases for
your database type. For assistance contact your database administrator.
Note: The database user must have the same permissions as the user
installing ALM.
When copying and upgrading the Site Administration database schema, ensure
that the existing project refers to the production project database and shared
repository, if applicable. When using a staging or side by side upgrade prior to
starting the server update, update the following columns in the PROJECTS table in
the Site Administration database schema to their new values:
l PHYSICAL_DIRECTORY
l DBSERVER_NAME
l DB_CONNSTR_FORMAT
l DB_USER_PASS
Upgrading the Site Administration
Database Schema
When installing ALM 16.00, you can choose to create a new Site Administration
schema on the database server, or you can upgrade a copy of the existing schema.
This chapter discusses considerations, guidelines, and prerequisites for upgrading
a copy of the existing schema.
This section includes:
• Schema Upgrade Guidelines 62
• Recovering a Lost Confidential Data Passphrase 63
• Managing Schema Changes 64
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 61 of 162
Schema Upgrade Guidelines
Upgrading a copy of the existing schema is a useful option if you are installing
ALM 16.00 on a new ALM server machine. Creating a copy of the existing schema
and then upgrading the copy enables you to work with new and upgraded projects.
Example:
If your ALM 12.00 schema contains a project called my_project, by creating
a copy of the Site Administration ALM 12.00 schema and then upgrading it to
ALM 16.00, the my_project project is available in Site Administration in both
ALM 12.00 and ALM 16.00.
Oracle database servers: The new database schema is created in the same
tablespace as the existing Site Administration database.
When you upgrade a copy of the existing Site Administration database schema,
the copy that is created is independent of the existing schema. Any changes
subsequently made to the original schema through updates in your previous
version of Quality Center or ALM are not reflected in the upgraded copy of the Site
Administration database schema that ALM 16.00 uses.
Therefore, consider the following guidelines:
ALM users After you install ALM 16.00, if you add or delete users or
update user details in your previous version of ALM/Quality
Center, you must make the same changes in ALM16.00.
ALM
configuration
parameters
After you install ALM 16.00, if you modify configuration
parameters in your previous version of ALM/Quality Center,
you must make the same changes in ALM 16.00.
Server node
configuration
If you are working with server nodes, in the Servers tab in Site
Administration for ALM 16.00, you must reconfigure the
settings for the ALM log file and the maximum number of
database connections.
ALM
repository
path
The repository path in your previous version must be defined
as a network path, so that it can be accessed by both the
previous ALM/Quality Center installations and by ALM 16.00.
Make sure that the project is active on one ALM server but not
on both.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 62 of 162
Recovering a Lost Confidential Data Passphrase
The Confidential Data Passphrase encrypts passwords that are used for accessing
external systems (databases and LDAP).
When configuring the installation, you must enter the same passphrase that was
used in the previous installation. If you do not know the passphrase, perform the
following steps.
Note: This procedure can be performed whether you are installing ALM16.00
on the same machine as the existing installation, or on a new or separate
machine, for example, if you are adding a node to a cluster. If you are not
sure on which server machine to install ALM 16.00, see"Suggested ALM
System Configuration" on page 48.
1. On the machine where ALM is currently installed, navigate to
/var/opt/ALM/conf directory.
2. Create a copy of the qcConfigFile.properties file
If you are installing ALM on a new server machine, place the copy on the
machine where you plan to run the new installation. Place the file in the same
location on the new machine.
Tip: If the .../ALM/conf directory does not exist on the new server
machine, manually create it. In such a case, make sure that the new
directory has the required permissions to be accessed by the
configuration tool.
3. Open the file and delete all information except for the line that starts with
initstring.
4. Save the copy. If you are installing ALM on a new machine, skip to step 6.
5. If you are upgrading ALM on the same machine as the previous installation:
a. Uninstall the current version of ALM. For information about uninstalling
ALM, see "Uninstalling ALM" on page 116. Uninstalling ALM does not remove
the existing qcConfigFile.properties file.
b. Overwrite the existing qcConfigFile.properties file with the version you
edited in step 3.
6. When you run the installation, the wizard detects a previous ALM installation
and prompts you to accept the current settings. Accept the current settings.
When the wizard reaches the Security page the previous Confidential Data
Passphrase appears.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 63 of 162
Managing Schema Changes
Changes to the existing Site Administration database schema may cause the
upgrade process to fail. Examples of such changes are the deletion of tables or
columns, or changes to field types.
If you are sure that the schema has been changed manually, perform the steps
below to ensure a successful schema upgrade.
If you are unsure if the schema has been changed, proceed with the installation as
normal. If the schema has been changed, the configuration process fails if the
changes cannot be handled automatically. It is important that not all schema
upgrade failures are the result of the schema changes. Check the error logs very
carefully to identify the exact cause of the failure. If it is apparent that the failure
was due to changes to the schema, proceed with the steps below. You will have to
run the configuration process again.
To prevent the upgrade process from failing, perform one of the following
actions:
Note: It is advisable to perform these actions in this order.
1. Manually repair inconsistencies between the old schema and the new schema.
For details about manually repairing the old schema, see "Changing the
Database User Schema" on page 157.
2. If the change is known and you are sure the upgraded ALMserver can work
with it, you can create an exception file that instructs ALM to ignore these
changes during the upgrade process. After creating the exception file, save it
in an accessible location on your system. After installing ALM the Site
Administration Database Schema page in the wizard prompts you to add the
file to the configuration process. As a result, the changes to the existing
schema do not cause the upgrade process to fail.
To create an exception file:
a. Copy the SchemaExceptions.xml file from the ALM installation directory.
By default, the file is located in: <ALM installation
path>\ALM\data\sa\Admin\MaintenanceData
b. Place the copy of the file in an accessible location on your system.
c. Edit the file and define exceptions. For example:
o For an extra table:
<TableMissing>
<object pattern="MY_Table" type="extra"/>
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 64 of 162
</TableMissing>
o For an extra view:
<ViewMissing>
<object pattern="MY_VIEW" type="extra"/>
</ViewMissing>
o For an extra column:
<ColumnMissing>
<object pattern="MY_COLUMN" type="extra"/>
</ColumnMissing>
o For an extra index:
<IndexMissing>
<object pattern="MY_INDEX" type="extra">
</IndexMissing>
o For an extra constraint:
<ConstraintMissing>
<object pattern="MY_CONSTRAINT" type="extra">
</ConstraintMissing>
o For multiple occurrences of extra elements:
For example, multiple extra columns:
<ColumnMissing>
<object pattern="MY_COLUMN_1" type="extra"/>
<object pattern="MY_COLUMN_2" type="extra"/>
</ColumnMissing>
d. Save the SchemaExceptions.xml file.
3. If you cannot manually repair the inconsistencies, or create an exception file,
create a new schema and then migrate the projects to the new schema.
If ALM is already installed on the server machine, you can rerun the ALM
Installation Wizard.
a. In the Site Administration Database Schema page, select Create a New
Schema.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 65 of 162
b. After the configuration process completes, migrate projects to the new
schema using the Restore Project option in Site Administration. For details,
refer to the Micro Focus Application Lifecycle Management Administrator
Guide.
Installation and Upgrade Guide - Linux
Pre-Installation Project Upgrade Steps
ALM (16.00-16.0.1) Page 66 of 162
ALM Installation and Configuration
Installing ALM on Linux Systems
This chapter describes how to install ALM on Linux operating systems. It also
describes how to install ALM silently.
Note: For installation troubleshooting details, see "Troubleshooting the ALM
Installation" on page 131.
This section includes:
• Installation Considerations: Linux 67
• Installing ALM: Linux 68
• Installing ALM in Silent Mode: Linux 85
• Working in Console Mode 86
Installation Considerations: Linux
Before installing ALM, consider the following:
Default ALM
paths
l Installation path: /root/ALM
l Server deployment path: /var/opt/ALM
l Repository path: /var/opt/ALM/repository
Paths and files
created
automatically
by the ALM
l /var/opt/Micro Focus/ALM/conf
l /var/opt/Micro Focus/ALM/log
l /var/opt/Micro Focus/ALM/runtime
ALM logs The locations of the ALM Site Administration and client log
files are subject to your settings. You can verify the locations
from Site Administration.
The installation log file is located in the ALM server installation
folder.
The deployment log file is located in /var/opt/Micro
Focus/ALM/log.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 67 of 162
Installation
scenarios
l Upgrading from ALM 12.5x or earlier to ALM 15.0. When
upgrading a copy of an existing Site Administration
database schema, consider the following:
l If you are using the existing settings as default, the
default deployment path will be the same as the path
used in the previous installation. This path can be
changed.
l If you are not using the existing settings as default, the
default deployment path will be /var/opt/Micro
Focus/ALM. This path can be changed.
Note: The repository path of the upgraded projects will
be the same as the path used in the previous installation.
After upgrading, the newly created projects will use the
repository path that was defined during the current
installation.
Java path used
by ALM
The variable MICRO_FOCUS_JAVA_PATH indicates the Java path
used by ALM. It will be added to /etc/profile during the ALM
installation.
If you need to start or stop the ALM service manually, or if you
need to install or uninstall an ALM patch, verify that the MICRO_
FOCUS_JAVA_PATH value in /etc/profile and that the current
session are both pointing to the path used by ALM.
l To verify the path in /etc/profile, run: # cat
/etc/profile
l To check it in your current session, run:
# echo $MICRO_FOCUS_JAVA_PATH
If the output is empty, run: # source /etc/profile, or login
with a new session, and try again.
Installing ALM: Linux
Before installing ALM, consider the following:
l Verify that you meet the various installation prerequisites. For prerequisite
information, see the relevant chapters in "Installation Prerequisites" on page 25.
l If you are working in a clustered environment, you must mount the file system
repository before you start the ALM installation process. The mount should not
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 68 of 162
use any cache mechanisms. For details, contact your network administrator.
l By default, the installation processes run in console mode. Navigating from one
wizard step to the next requires familiarity with the various console mode
command types. For explanations of the various command types and the
methods for entering configuration settings, see "Working in Console Mode" on
page 86.
l If you are planning to upgrade a copy of the existing Site Administration schema,
the database server of the existing Site Administration schema and the database
server of the existing Lab_Project must be supported. If these database servers
are not supported, you can disable the validation check. For details, refer to
"Disabling Validation Checks for the Installation Wizard" on page 131.
Note: For the most up-to-date supported environments, see
http://admhelp.microfocus.com/alm/specs/alm-qc-systemrequirements.htm.
l If you encounter problems during the ALM installation process, see
"Troubleshooting the ALM Installation" on page 131 for troubleshooting
suggestions.
l If you want to reconfigure ALM after the installation and configuration is
complete, you must run the installation procedure again.
l If an error occurs during the installation procedure, you must uninstall and restart
the installation procedure.
l If an error occurs during the installation procedure and the installation log file is
not found, ensure that enough disk space is available for installation and
deployment to the selected locations, and that system settings such as the open
file resources limit are set to the maximum allowable value.
l $ is a reserved character in the installation procedure. For non-password fields
use $DOLLAR$. For example, $admin$ should be entered as
$DOLLAR$admin$DOLLAR$. Password fields can continue to use $.
To install ALM:
1. Log in to the ALM host machine with the appropriate permissions. For a list of
required permissions, see "Required Permissions: Linux" on page 28.
2. If Quality Center or ALM is installed on the machine, uninstall it. For information
on uninstalling, see "Uninstalling ALM from Linux Systems" on page 116.
Cluster environment: Uninstall ALM from all nodes.
3. The installation process can be run in console mode only.
4. Create an installation directory on the server. For example: /usr/Install/ALM.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 69 of 162
Note: The ALM installation cannot be executed using a path that
contains "..", such as ./../../ALM/ALM_installer.bin
5. Navigate to the /mnt/dvd/ALM-Linux installation subfolder.
6. Copy the entire contents of the subfolder to the installation directory you
created on the server.
7. Run the following chmod command to allow permissions for the installation
files: chmod -R 777 <installation directory>.
8. From the installation directory on the server, navigate to the folder with the
ALM_installer.bin file and run ALM_installer.bin.
Note:
l The configuration settings are saved in the qcConfigFile.properties
file.The file is created in the /var/opt/ALM/conf directory. The file
should not be moved from this location.
l Also, the repid.txt file is created in the <ALM Repository path>/qc
folder. The file should not be moved from this location.
l If you are installing ALM on a secondary node of a cluster, some of the
configuration dialog boxes that are needed only for the primary node
are not displayed.
9. The Application Lifecycle Management Setup Wizard page opens, displaying
the Welcome page.
Click Enter to continue.
10. The License Agreement page is displayed.
Read the agreement. To accept the terms of the agreement, select 2.
11. If the wizard detects settings from a previous ALM installation, the Existing
Settings page is displayed.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 70 of 162
By default, existing settings are used. The existing settings appear as defaults
in subsequent wizard screens. You can then make changes to any of the
settings.
Choose to keep or clear the existing settings, then proceed to the next page.
12. The JDK/JRE Path page is displayed.
Enter the JDK or JRE folder path.
Note: ALM requires Java JDK or JRE to be installed prior to installing
ALM. For details, see "Java Installation" on page 43.
13. The Choose Install Folder page is displayed, displaying the default location for
the installation files.
To keep the default installation folder, click Enter, or enter an absolute path to
define another destination folder.
Note: If you change the default, a soft link (symbolic link) with the default
directory path is created that points to the directory you define.
14. The Database Server page is displayed.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 71 of 162
a. Select the database type.
For details on database requirements, see "Prerequisites: Oracle Database
Servers" on page 31 or "Prerequisites: Microsoft SQL Database Servers" on
page 38.
b. Select a database connection method.
Select one of the following:
o Database Parameters. Enables you to enter database server
information.
o Connection String. Enables you to type a formulated database server
connection string.
Oracle
RAC
databa
se
Select Connection String, and enter a connection string,
specifying the folder that contains the tnsnames.ora file, and
the TNS server to which ALM should refer. Use the following
example:
jdbc:oracle:thin:@OrgRAC;oracle.net.tns_
admin=/opt/oracle/tnsnameFolder
For details on prerequisites for Oracle RAC support,
see"Oracle RAC Support" on page 37
Micros
oft SQL
Server
databa
se
If your database requires SSL/TLS access, see "To configure
a secure database connection for a new ALM installation:" on
page 110.
c. Enter Database Parameters.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 72 of 162
If you selected the Database Parameters connection method above, enter
the following information:
o DB host name. Type the database server name.
o DB port number. Type the database server port number, or accept the
default port number. To accept the default click Enter.
o Oracle service name. Type the Oracle service name.
d. Enter Database Administrator Login information.
Specify the following:
o DB admin user name. The name of the user with the administrative
permissions required to connect ALM to the database server.
o DB admin password. The database administrator password.
15. The Site Administration Database Schema page is displayed.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 73 of 162
a. Select a Site Administration database schema option.
Select one of the following:
Create a
New
Schema
Creates a new Site Administration database schema and a
new Lab_Project. This is the default option.
Note: The installation log and the enable_
extensions.txt file contain error messages stating
"Schema differences were found". These errors can be
ignored, they are generated as part of the schema
enable extension mechanism and the upgrade
mechanism.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 74 of 162
Upgrade a
copy of
the
existing
schema
Creates a copy of the existing Site Administration database
schema, and upgrades the copy. For details, "Upgrading the
Site Administration Database Schema" on page 61.
If you select this option, you are prompted to add an
exception file to the upgrade process. If you have defined an
exception file, enter the location of where it was saved prior
to the installation process. For details about exception files,
see "Managing Schema Changes" on page 64.
When working in a cluster environment, select this option if
you have an existing primary node and you want to install
ALM.
Note: When you upgrade a copy of the existing Site
Administration schema, ALM tries to copy LAB_
PROJECT to the database server where the original
LAB_PROJECT exists. If LAB_PROJECT is successfully
copied, the new upgraded Site Administration schema
points to the new copy of LAB_PROJECT. If LAB_
PROJECT is not copied, a new empty LAB_PROJECT is
created in the database server where the new Site
Administration database schema is created. For
details, see "LAB_PROJECT Installation
Considerations" on page 87"LAB_PROJECT Installation
Considerations" on page 87
Connect
to
existing
schema /
second
node
This option can be used in two scenarios:
o If you are reinstalling ALM and would like to reconnect to
the same Site Administration database schema.
o If you have an existing node and you want to install ALM
on another node to create a cluster. For details on cluster
configuration, see "Clustering: Linux" on page 30.
Note: This option enables you to connect to an
ALM16.00 Site Administration database schema
only. To connect to an earlier version of Site
Administration, you must first upgrade the schema.
For details, see "Upgrading the Site Administration
Database Schema" on page 61.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 75 of 162
b. When creating a new schema, in Database Name, enter the name of the
database.
c. Enter Oracle Tablespace information.
If you are using an Oracle database, enter the following information. If you
are using a Microsoft SQL database, skip this step
Note: If you are installing ALM on a secondary node or if the Site
Administration database already exists, the new Site Administration
database schema is created in the same tablespace as the existing
schema. Continue with the Security step below.
o Default Tablespace. The Default Tablespace is the location on the
database where database objects will be created.
o Temporary Tablespace. The Temporary Tablespace is the location on
the database where temporary tables are created to facilitate internal
database functionality, such as large sorting tasks. We recommend that
you accept the default location.
d. Enter Site Administration database schema details.
Enter the following information:
o Schema name. Enter a name for the Site Administration database
schema, or accept the default. The Site Administration database schema
name can only contain English characters or numbers.
If you selected Upgrade a copy of the existing schema above, the New
Schema Name option appears. Type a name for the upgraded copy of
the Site Administration database schema.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 76 of 162
Note: When upgrading an existing Site Administration database
schema to work in ALM16.00, you must use the same name that
you used before the upgrade.
o Schema password. Enter the following information, depending on your
database type:
l Oracle. The default tdtdtd password is created, which you can accept
or change.
l Microsoft SQL Server (SQL Auth.).ALM uses the td user to create the
Site Administration database schema. For more details on the td user,
see"User Permissions for Connecting ALM to a Microsoft SQL
Database Server" on page 40.
Type a password for the td user that complies with your organization’s
password policy, or keep the default tdtdtd password.
16. The License Key page is displayed.
Note: If you selected Connect to existing schema / second node in the
previous step, the License Key step is skipped. Continue with the Security step
below.
Select one of the following options:
Insert
License file
Select 1 to enter the License file path.
Enter the ALM License file path.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 77 of 162
Use
Evaluation
Key
Select 2 to use an Evaluation Key.
If you do not have a License key, you can use an evaluation
key for a 30-day trial version of ALM.
A list of available ALM editions is displayed. From the editions
list, choose the edition you want to use.
Note: If you install Micro Focus Quality Center
Community Edition, you must assign named licenses to
your users. Only then can the users successfully log in
to ALM and see the appropriate modules. For details on
assigning named licenses, see the Micro Focus
Application Lifecycle Management Administrator
Guide.
Use License
Server
(Technical
Preview)
Select 3 to use the AutoPass License Server (APLS).
a. Enter the license server address.
b. Enter the license server port.
c. Enter license server protocol.
Alternatively, you can also configure APLS after the ALM
installation. Perform the following steps:
a. From the ALM server machine, navigate to
/var/opt/
ALM/repository/sa/Admin/MaintenanceData/conf
b. Edit clusterSettings.properties
c. Define values for the following fields: AUTOPASS_
SERVER_PROTOCOL, AUTOPASS_SERVER_PORT,
AUTOPASS_SERVER_NAME.
d. Save and restart the ALM server.
For information on how to use APLS to organize and manage
your ALM licenses, refer to the Micro Focus Application
Lifecycle Management Administrator Guide.
17. The Security page is displayed.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 78 of 162
Passwords for accessing external systems (databases and LDAP) are stored
by ALM after encryption. Enter a Confidential Data Passphrase that ALM uses
to encrypt the information or choose to use the default value. If you use the
default value however, the encrypted information is more vulnerable to
unauthorized access.
Make a note of the passphrase for future support calls. You will also need the
passphrase if you choose to redeploy ALM or choose to upgrade a copy of the
existing Site Administration Database Schema, or whenever you upgrade the
ALM version.
Confidential Data Passphrase Considerations
l You must enter the same passphrase that was used for the previous
installation. If you do not know the passphrase, there is a workaround to
recover it. However, you have to abort the configuration process and then
begin again once the workaround is complete. For details, see "Recovering a
Lost Confidential Data Passphrase" on page 63.
l If you are planning to migrate LoadRunner Enterprise and/or Lab
Management enabled projects onto the server on which you are performing
the installation, you must use the same Confidential Data Passphrase that
was defined on the server on which the projects were created.
l If you are installing ALM on a cluster, you must use the same passphrase for
all nodes.
l After completing the server installation wizard, you cannot change the
confidential data encryption passphrase.
l The passphrase is case-sensitive. Check that there are no empty spaces
before or after the passphrase. The passphrase must contain only
alphanumeric characters.
18. Enter a Communication Security Passphrase.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 79 of 162
Communication between ALM and other Micro Focus applications is enabled
after authentication by a Single Sign-On (SSO) token. Enter a Communication
security passphrase that ALM uses to encrypt the SSO token.
Note:
l The communication security passphrase is stored as the value of the
COMMUNICATION_SECURITY_PASSPHRASE site configuration
parameter. For details, refer to the Micro Focus Application Lifecycle
Management Administrator Guide.
l The passphrase must contain only alphanumeric characters, and must
contain at least 12 characters.
l LoadRunner Enterprise: You must use the same communication
security passphrase for the LoadRunner Enterprise server
configuration.
19. Enter Site Administrator Login information.
Specify the following:
l Site Administrator user name. The Site Administrator user name.
l Site Administrator password. The Site Administrator password.
After entering the Site Administrator password, you are prompted to reenter the password.
You use the site administrator name and password that you define here to log
in to Site Administration. After installation, you can change the site
administrator or add other site administrators. Enter a site administrator user
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 80 of 162
name (maximum length 60 characters) and password, and retype the
password to confirm.
If you are upgrading a copy of the existing Site Administration database
schema, by default the same user and credentials are applied to the upgraded
Site Administration database schema. The Create additional Site
Administrator user option is displayed, enabling you to ignore this default and
create an additional user.
Note:
l The user name cannot include the following characters: \ / : * ? " < > |
l The password cannot be longer than 20 characters.
l It is important that you remember the site administrator user name and
password as otherwise you cannot log in to Site Administration.
20. The File Repository Path page is displayed.
Accept the default path or enter a new path. If you choose to ignore the
default, make sure to enter a unique case-sensitive path.
Note:
l Make sure you select a path where you have full read and write
permissions.
l To work with cluster nodes, make sure that all nodes have access to
the file repository path and that the path is UNC. All nodes in the
cluster must have the same repository path.
l The length of the file repository path cannot exceed 200 characters.
l The file repository path cannot reside on the root folder.
Using the BASE_REPOSITORY_PATH site configuration parameter, you can
create a location for a repository path where new projects will be located.
Performing this action, results in the creation of two repository paths - the
previous path containing older projects, and a second path containing projects
created subsequently. For details, refer to the Micro Focus Application
Lifecycle Management Administrator Guide.
21. The Application Server page opens.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 81 of 162
a. Enter Deployment Path information.
Enter a Deployment Path, where you specify the location in which you want
to deploy ALM application files. We recommend that you keep the default.
Note: The length of the deployment path cannot exceed 200
characters.
b. Enter Web server information.
Change or keep the default HTTP port number. The default port is 8080.
Note: If an error message is displayed that the default port is
unavailable, it may be the port is in use by another application running
on the server machine. Either locate the application and stop it, or
enter a different port number. To enter a different port number, you
must first change the port number on the application server. For
details, see "Changing the Application Server Port Number" on
page 100. Then proceed with the configuration as normal.
c. The Advanced Options page opens.
Click Enter to continue.
22. The Mail Server page is displayed.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 82 of 162
To enable ALM to send emails to users in an ALM project, choose SMTP
Server. Then when prompted, enter the server name.
Note: The Mail Server can be configured after installation in Site
Administration. For details, refer to the Micro Focus Application Lifecycle
Management Administrator Guide.
23. The Start ALM Server page is displayed. To keep the default option, click
Enter.
24. The ALM Client Launcher page is displayed.
From this page, you can:
l Use the marketplace link to download ALM Client Launcher and learn more
about the tool.
You can also download ALM Client Launcher after the ALM installation.
l Enter Y in the Package client files in the server for ALM Client Launcher
option to have client files automatically packaged in the server.
We recommend that you package client files if you want to use ALM Client
Launcher. It saves you from manually uploading client files to the server.
Users that have downloaded ALM Client Launcher can seamlessly run an
ALM client upon the successful ALM installation.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 83 of 162
25. The Installation Summary page is displayed. To change any settings, enter
Back.
Understand the breaking changes in this version and acknowledge all the
breaking changes to continue.
To apply the settings and start the configuration process, click Enter.
26. The Finish page is displayed.
If the installation process fails, check the installation logs for details. For
details, see "Checking the Installation and Configuration Log Files" on
page 133.
If you selected to upgrade a copy of the existing Site Administration database
schema, it is possible that an upgrade related issue caused the configuration to
fail. Check the following files located in the <file repository
path>/sa/Admin/maintenancedata/out directory for more information:
l upgrade.txt
l verifyreport.html
If the failure was due to changes made to the existing Site Administration
database schema and the upgraded ALM server will work properly with these
Site Administration database schema changes, you need to create an
exception file that excludes these changes from the upgrade process. Then
run the installation again, using the current settings. For details, see "Managing
Schema Changes" on page 64.
27. If you are prompted to restart your machine you can choose to restart at a later
time but you must restart before you use ALM. You must also restart before
you install any ALM related files, such as integration add-ins.
If choose not to restart the ALM server during installation, make sure to run
source /etc/profile to prevent the ALM service from failing to start.
Alternatively, re-login with a new session.
28. If you are using an Oracle RAC database, verify that the ORACLE_RAC_
SUPPORT site configuration parameter is set to Y. For details, refer to the
Micro Focus Application Lifecycle Management Administrator Guide.
29. The installation of ALM is now complete. Proceed to "Starting ALM" on page 88
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 84 of 162
Installing ALM in Silent Mode: Linux
A silent installation runs the entire setup process in the background without
requiring you to navigate through setup screens and input selections. Instead, all
configuration parameters are assigned values that you define in a configuration file
(qcConfigFile.properties). When running an installation in silent mode, no
messages are displayed. Instead, you can view installation information in the log
file, including information on whether the installation was successful. The
installation log file can be found under the <installation folder>/log directory. The
deployment and configuration log file can be found under the /var/opt/ALM/log
directory.
To troubleshoot problems you may encounter while running the installation, see
"Troubleshooting the ALM Installation" on page 131.
If you want to reconfigure ALM after the installation and configuration is complete,
you must run the installation procedure again.
If an error occurs during the installation procedure, you must uninstall and restart
the installation procedure.
If an error occurs during the installation procedure and the installation log file is not
found, ensure that enough disk space is available for installation and deployment
to the selected locations, and that system settings such as the open file resources
limit are set to the maximum allowable value.
$ is a reserved character in the installation procedure. For non-password fields use
$DOLLAR$. For example, $admin$ should be entered as
$DOLLAR$admin$DOLLAR$. Password fields can continue to use $.
To install ALM in Silent Mode:
Note: To run silent installations for different configurations, you can create
multiple configuration files.
1. Uninstall any previous installations of Quality Center or ALM from the server
machine.
2. Create the qcConfigFile.properties file.
The file defines the configuration values that are used during the installation.
We recommend using an existing file from a prior installation of ALM.
If there is no existing file, you can create one manually. However, this can be a
complicated process that is error-prone. We suggest that you create one by
running a normal installation. During the installation process, the file is
automatically created. The configuration values you define during the
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 85 of 162
installation process are recorded in the file. Even if you subsequently uninstall
ALM, you can keep and edit the file as needed for future installations.
The file is automatically saved in the following path /var/opt/ALM/conf.
3. Create an installation directory with read and write permissions on the server,
for example: /usr/Install/ALM
Note: The ALM installation cannot be executed using a path that
contains "..", such as ./../../ALM/ALM_installer.bin
4. Under the mount folder, navigate to the /mnt/dvd/ALM-Linux installation
subfolder.
5. Copy the entire contents of the subfolder to the installation directory you
created on the server.
6. Run the following chmod command to allow permissions for the installation
files: chmod -R 777 <installation directory>
7. Update the installer.properties file with the installation directory and the path
of the configuration file, if the configuration file is not in the default path.
Note: Neither the length of the file repository path nor the length of the
deployment path can exceed 200 characters.
8. From the installation directory on the server, navigate to, and run the run_
silent.sh file.
Working in Console Mode
By default, the ALM Server Installation Wizard runs in console mode. Navigating
from one wizard step to the next requires familiarity with the various console mode
command types. This section explains the various command types and the
methods for entering configuration settings.
List Options
Some wizard screens present a set of options in the form of a list, where you can
select only one option. For example:
To make your selection, type the numeric value of the option you wish to select,
then press Enter.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 86 of 162
The page appears again, this time with the checkmark placed by the option you
selected. In this example, if you enter 2, then press Enter, the following appears:
To confirm your selection, type 0 then press Enter.
Text Options
Some wizard screens require you to enter text. For example:
If the wizard detects a pre-existing value for the required field, or if there is a
default value, that value appears in brackets. For example:
To ignore the existing value, type a new value then press Enter. The new value
overrides the existing value.
To keep the current value, or leave the field empty, press Enter. The following
option appears:
To proceed to the next step with the existing value, type 1 then press Enter.
To proceed to the next step and leave the field empty, type 2 then press Enter.
LAB_PROJECT Installation Considerations
When you select Upgrade a copy of the existing schema in the Installation
wizard, ALM tries to copy LAB_PROJECT as well. Below is a more detailed
explanation of the actions performed on LAB_PROJECT when upgrading a copy of
the existing Site Administration schema:
1. ALM tries to copy LAB_PROJECT to the database server where the original
LAB_PROJECT exists.
If LAB_PROJECT is successfully copied:
l The new Site Administration schema points to the new LAB_PROJECT.
l The copied LAB_PROJECT has an empty repository. You need to copy the
repository from the source LAB_PROJECT.
l The copied LAB_PROJECT must be upgraded.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 87 of 162
2. If ALM fails to copy LAB_PROJECT to the database server where the original
LAB_PROJECT exists, a new empty LAB_PROJECT is created in the database
server where the new Site Administration database schema is created.
To copy the original LAB_PROJECT data to make it usable for the installation:
l Remove the new LAB_PROJECT.
l Create a copy of the original LAB_PROJECT database schema and
repository:
o Backup the original LAB_PROJECT database schema.
o Restore a backup of the original LAB_PROJECT into the new installation
database server.
o Copy the source repository from the original LAB_PROJECT into the new
installation repository.
l Update the dbid.xml file of the new LAB_PROJECT with the new:
o Installation database server name
o Connection string
o Password
o Repository location
l Restore the new LAB_PROJECT.
l Upgrade the new LAB_PROJECT.
Starting ALM
This chapter introduces ALM options and resources. It also explains how to start
ALM.
• Starting ALM on a Client Machine 88
• Registering ALM on a Client Machine 90
Starting ALM on a Client Machine
You launch ALM on your client machine from your Web browser.
Before logging in to ALM, you must first create a project in Site Administration. For
details, refer to the Micro Focus Application Lifecycle Management Administrator
Guide.
Note:
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 88 of 162
l To enable ALM to work with Micro Focus testing tools as well as thirdparty and custom tools, you must run the ALM Client Registration add-in,
which registers ALM components on the client machine. For details, see
"Registering ALM on a Client Machine" on the next page.
l If your users connect to ALM over a virtual environment, such as Citrix or
VMware, you can deploy ALM components on a shared location that all
users can access. To enable a shared deployment, run the Shared
Deployment for Virtual Environments add-in from the Application
Lifecycle Management Add-ins page. For details on installing add-ins,
refer to the Micro Focus Application Lifecycle Management Administrator
Guide.
l We recommend that you import the ALM Demo Project available from the
ALM Help page (select Help > Demo Project). Importing this project
enables you to run all lessons in the Micro Focus Application Lifecycle
Management Tutorial. In Site Administration, import the ALM Demo file. For
details on importing projects, refer to the Micro Focus Application
Lifecycle Management Administrator Guide.
To start ALM:
1. Open your Web browser and type your ALM URL: http://<ALM server name>
[:<port number>]/qcbin
2. For Single-Sign-On users:
a. If the user discovery page is displayed, add your user name or email
address as specified in ALM. Click Submit.
b. In the IDP page, add your IDP credentials. Click the log in button.
3. The Application Lifecycle Management Options window opens.
4. Click the ALM Desktop Client link. Each time ALM is run, it carries out a version
check. If it detects a newer version, it downloads the necessary files to your
machine.
Tip: Click the Open in Full Screen mode icon to open ALM in Full
Screen mode. Full Screen mode enables you to take advantage of the
entire screen when using ALM.
Keep in mind the following guidelines:
l If you do not have administrator privileges on your machine, and a Security
Warning displays, click Don't Install. You are redirected to the Install screen.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 89 of 162
l If file downloads are prohibited through your browser, you can install these
files by using the ALM Client MSI Generator add-in, available from the
Application Lifecycle Management Add-ins page (Help > Add-ins).
l If you run ALM over a virtual environment, such as Citrix or VMware, only the
system administrator can install a new version.
l If files are downloaded, but the Login window does not display, you must
install a Microsoft Hotfix on your machine. For details, see this KB article.
5. Follow the on-screen instructions. After the ALM version has been checked
and files have been updated as necessary, the Application Lifecycle
Management Login window opens.
Note: If you are an external authentication user, you are not required to
provide name and password in this window. Continue with step 9.
6. In the Login Name box, type your user name.
7. In the Password box, type the password. If you cannot remember your
password, click the Forgot Password link. For details, refer to the Micro Focus
Application Lifecycle Management User Guide.
8. Select the Automatically log in to my last domain and project on this
machine check box if you want ALM to automatically log in to the last project in
which you were working.
9. Click Authenticate. ALM verifies your user name and password and
determines which domains and projects you can access. If you specified
automatic login, ALM opens.
If authentication fails, check that your user name and password are correct and
try again.
10. In the Domain list, select a domain. By default, the last domain in which you
were working is selected.
11. In the Project list, select a project. By default, the last project in which you
were working is selected.
12. Click Login. ALM opens and displays the module in which you last worked
during your previous session.
Registering ALM on a Client Machine
To enable you to work with other Micro Focus testing tools as well as third-party
and custom tools, ALM must be registered on the client machine. To register ALM,
run ALM Client Registration from the Application Lifecycle Management Tools
page.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 90 of 162
Note: If you are running previous versions of ALM/Quality Center on your
machine, before registering ALM 16.00, make sure that all instances of
ALM/Quality Center and any integration tools are closed.
Tools that Require Registering ALM Client Components
The following tools require that ALM client components be registered on the client
machine:
ALM
Addins
l UFT One Add-in
Micro Focus UFT One (UFT One) comprises the product formerly
known as Micro Focus QuickTest Professional and the product
known as Micro Focus Service Test.
l Functionality provided by QuickTest is now known as GUI testing
in UFT One.
l Functionality provided by Service Test is also known as API testing
in UFT One.
l Micro Focus Screen Recorder Add-in
l Service Test Add-in
l ALM Synchronizer
l Defects and Requirements Exchange with Micro Focus Service
Manager and ALM
Other UFT One tests
Micro Focus UFT One (UFT One) comprises the product formerly
known as Micro Focus QuickTest Professional and the product known
as Micro Focus Service Test.
l Functionality provided by QuickTest is now known as GUI testing in
UFT One.
l Functionality provided by Service Test is also known as API testing in
UFT One.
Note:
l Required to run tests.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 91 of 162
Integrating the ALM Application Server
with a Web Server
To enhance the security of your ALM deployment, we recommend placing the ALM
server behind a secure reverse proxy, either an Apache or IIS web server. Such
configuration is also required to support external authentication. If you are not
using a secure reverse proxy, we recommend configuring SSL on the ALM server
itself. For details on configuring SSL, see "Managing the ALM Application Server"
on page 99.
Configuring IIS as a reverse proxy
To integrate ALM with a web server, you configure the web server to redirect
requests to the ALM Application Server. You configure the web server to work in
proxy HTTP mode.
To configure IIS to work as a reverse proxy:
Note: The following instructions apply to IIS 7.0 and later.
1. Using Server Manager, install the IIS server using default settings. You do not
need to enable any other extensions.
2. Install the URL rewrite package from
http://www.iis.net/downloads/microsoft/url-rewrite.
3. Install Application Request Routing (ARR) for IIS from
http://www.iis.net/downloads/microsoft/application-request-routing.
Note: You may need to disable Internet Explorer ESC and run Internet
Explorer as an administrator.
If you have no direct access to the internet from your server, you can
obtain the ARR 3.0 standalone version that contains everything you
need, including the URL rewrite package, from
http://www.microsoft.com/en-us/download/details.aspx?id=40813.
Download ARR 3.0 to your client, copy it to the server, and install it on the
server.
4. Make sure the IIS Web server is stopped.
5. Open IIS Manager and ensure you have an element named Server Farms under
the relevant IIS server node.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 92 of 162
Note:
l If there is no Server Farms element and you are using a Windows 2012
server, uninstall Microsoft Web Farm Framework and download the
latest version from
http://download.microsoft.com/download/5/7/0/57065640-4665-
4980-a2f1-4d5940b577b0/webfarm_v1.1_amd64_en_us.msi.
l If you fail to install a Web Farm for IIS 10, see this KB article.
6. Right click Server Farms and click Create Server Farm.
7. Enter a name for the farm and click Next.
8. Click Advanced settings and change the ports to match your ALM Jetty ports.
The default ALM Jetty ports are 8080 for http and 8443 for https.
9. Under Server address, type the name or IP address of the ALM server you
want to add to the farm.
10. Click Add to add the server.
Note: Repeat steps 9 - 10 to add more ALM servers to use IIS as a load
balancer in an ALM cluster.
11. Click Finish.
12. Click Yes in the Rewrite Rules dialog box that opens. This adds a URL rewrite
rule that causes IIS to forward all incoming requests to the ALM Server.
13. Select the new Server farm element created.
14. Double-click Proxy.
15. Set Time-out (seconds) to 35.
16. Set Response buffer threshold to 0.
17. Click Apply.
Note: This change is applied only to the Application Request Routing
proxy.
18. Enable the proxy.
a. Select the main tree node (the server name), click Application Request
Routing Cache, and then click Server Proxy Settings in the Proxy section.
b. Enable Enable proxy.
c. Verify that HTTP version is valued with Pass Through.
d. Verify that Reverse rewrite host in response headers is enabled.
e. Click Apply.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 93 of 162
19. Restart the IIS Web server.
You can now connect to your ALM site using the following URL: http://<IIS
server name>/qcbin.
20. If you are using IIS with multiple servers farms:
a. Add another server farm for the other server group.
b. Modify the URL Rewrite rule for the ALM server farm:
i. Select the main tree node (the server name) and click URL Rewrite.
ii. Edit the Inbound Rule.
iii. Change Using from Wildcards to Regular Expressions.
iv. Change Pattern to (^qcbin(.*)).
v. Click Apply.
c. Modify the URL Rewrite rule for the other server farm:
i. Select the main tree node (the server name) and click URL Rewrite.
ii. Edit the Inbound Rule.
iii. Change Using from Wildcards to Regular Expressions.
iv. Change Pattern to reflect the other server group .
v. Click Apply.
d. Restart the IIS Web server.
Configuring IIS as a Secure Reverse Proxy
To configure IIS to work as a secure reverse proxy:
Note: For detailed instructions, refer to the IIS documentation.
1. Ensure that you configured IIS to work as a reverse proxy.
2. Install the server certificate in IIS.
Note: The server certificate must have a password protected private
key.
In IIS Manager:
l Import your server certificate:
Select Server > Certificates > Import.
l Add a listener on a secure port:
Select Default Website.
Edit Bindings.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 94 of 162
Click Add.
Select https and select your certificate.
3. In SSL Settings for your website, configure IIS to require an SSL connection.
4. Verify that you can access the ALM server through the IIS virtual IP using the
https protocol.
Configuring the IIS Web Server for
SSL Offloading
SSL Offloading means that IIS is configured to connect to ALM over http and not
https. In this case, perform the following configuration:
1. Edit the qcbin inbound rule and add the following server variable:
Set name="HTTP_X_FORWARDED_PROTO" value="https".
2. In Action Properties, change the protocol from https to http.
3. Restart IIS so it will read the configuration.
Configuring Apache as a reverse proxy
To configure Apache to work as a reverse proxy:
Note: It is recommended that you use Apache HTTP Server version 2.4.
1. Make sure the Apache Web server is stopped.
2. Navigate to the <Apache Home directory>\conf directory.
3. Create a backup copy of the httpd.conf file.
4. Open the httpd.conf file.
5. Uncomment or add the following load module commands:
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule headers_module modules/mod_headers.so
6. Add the following section to the end of the file:
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 95 of 162
# Turn off support for true Proxy behavior as we are acting as
# a reverse proxy
ProxyRequests Off
# Turn off VIA header as we know where the requests are proxied
ProxyVia Off
# Set the permissions for the proxy
<Proxy *>
AddDefaultCharset off
Order deny,allow
Allow from all
</Proxy>
# Turn on Proxy status reporting at /status
# This should be better protected than: Allow from all
ProxyStatus On
<Location /status>
SetHandler server-status
Order Deny,Allow
Allow from all
</Location>
# Configuring mod_proxy_http
# To connect to servlet container with HTTP protocol, the
ProxyPass
# directive can be
# used to send requests received on a particular URL to a Jetty
instance.
ProxyPreserveHost off
ProxyPass /qcbin http://<ALM server name>:8080/qcbin
ProxyPassReverse /qcbin http://<ALM server name>:8080/qcbin
# For LoadRunner Enterprise deployments, add the following:
ProxyPass /loadtest http://<LoadRunner Enterprise server
name>/loadtest
ProxyPass /LoadTest http://<LoadRunner Enterprise server
name>/LoadTest
ProxyPass /Loadtest http://<LoadRunner Enterprise server
name>/Loadtest
ProxyPassReverse /loadtest http://<LoadRunner Enterprise server
name>/loadtest
ProxyPassReverse /LoadTest http://<LoadRunner Enterprise server
name>/LoadTest
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 96 of 162
ProxyPassReverse /Loadtest http://<LoadRunner Enterprise server
name>/Loadtest
# Rewrite rule trailing slash must be used in the VirtualHost
section
RewriteEngine On
# Add trailing slash if was not present in the original request
RewriteRule ^/qcbin$ /qcbin/ [R]
7. Save the changes to the file.
8. Run httpd -t from the Apache bin folder to check the syntax of the file.
9. Restart the Apache Web server.
You can now connect to your ALM site using the following URL: http://<ALM
virtual server name>[:<apache port number>]/qcbin.
Configuring Apache as a Secure Reverse Proxy
To configure Apache to work as a secure reverse proxy:
1. Open the httpd.conf file.
2. Uncomment ssl_module:
LoadModule ssl_module modules/mod_ssl.so
3. Uncomment the httpd-ssl.conf file:
# Secure (SSL/TLS) connections
Include conf/extra/httpd-ssl.conf
4. Close the httpd.conf file and open the httpd-ssl.conf file. By default it is in
/<apache-directory>/conf/extra.
5. In the httpd-ssl.conf file, activate the SSL port 443:
Listen 443
6. Add the SSLProtocol parameter:
SSLProtocol -SSLv2 -SSLv3 +TLSv1
7. Change the cache settings:
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 97 of 162
LoadModule socache_shmcb_module modules/mod_socache_shmcb.so
SSLSessionCache "shmcb:<apacheAbsoluteFolder>/logs/ssl_scache
(512000)"
8. Modify the VirtualHost and ServerName parameters:
<VirtualHost <fully qualified server name>:443>
ServerName <fully qualified server name>:443
9. Add the SSL certificates to the VirtualHost section:
# Server Certificate
SSLCertificateFile " /<apachedirectory>/conf/WebServerPublicCert.pem"
# Server Private Key:
SSLCertificateKeyFile " /<apachedirectory>/conf/WebServerPrivateCert.pem"
10. Restart Apache so it will read the new configuration.
Run <apache-directory>/bin/apachectl -k restart
11. Verify that Apache works as a secure proxy server.
Go to https://webserver/qcbin. Make sure the ALM home page is displayed.
Note: The web server name must be in FQDN (fully qualified domain
name) format when using a secure connection.
12. After verifying that Apache works as a secure proxy server, close the nonsecure port.
a. Open the httpd.conf file.
b. Comment out the Listen parameter:
#Listen 80
Configuring the Apache Web Server for
SSL Offloading
SSL Offloading means that Apache is configured to connect to ALM over http and
not https. In this case, perform the following configuration:
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 98 of 162
1. Navigate to the <Apache Home directory>\conf directory.
2. Create a backup copy of the httpd.conf file.
3. Open the httpd.conf file.
4. Add the following section if encrypted communication terminates on the
Apache server:
###############################################################
# add the following line if SSL is terminated/offloaded on
Apache server
###############################################################
RequestHeader set X-Forwarded-Proto https
5. Save the httpd.conf file.
6. Restart Apache so it will read the configuration.
Managing the ALM Application Server
This chapter contains information relating to managing the ALM Application
Server, as well as information regarding general Java management tools.
This chapter includes
• Changing the Heap Memory Size 99
• Changing the Application Server Port Number 100
• Configuring Secure Access on Linux Systems 100
• Configuring Secure Database Access 105
• Application Server Management Tools 111
Changing the Heap Memory Size
After you install ALM, you may need to change the heap memory values. For
example, you may want to increase the heap size if there is an increase in the
number of active projects in ALM, or an increase in the number of concurrent user
sessions.
Note:
l The maximum heap value cannot exceed your maximum memory (RAM)
size.
l On a machine running on a 32-bit operating system, the heap memory size
should not exceed 1024 MB.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 99 of 162
To change the heap memory size:
1. Verify that all users have logged out of ALM projects and stop the ALM Service.
Navigate to the <ALM deployment path>/wrapper directory, and run the
following command: HPALM stop.
2. In the ALM deployment path, open the wrapper.conf file.
3. Change the wrapper.java.maxmemory value as necessary.
4. Restart the ALM Service. Navigate to the <ALM deployment path>/wrapper
directory, and run the following command: HPALM start.
Changing the Application Server Port Number
After you install ALM, you may need to change the application server port number.
It is possible that the default application server port may be in use by another
application that is running on the same machine. In this case, you can either locate
the application that is using the port and stop it, or you can change the application
server port on the machine.
To change the application server port number:
1. Verify that all users have logged out of ALM projects and stop the ALM Service.
Navigate to <ALM deployment path>/wrapper directory, and run the
following command: HPALM stop.
2. Navigate to the <ALM deployment path>/server/conf/jetty.xml file.
3. Change the jetty.port value.
4. Start the ALM Service. Navigate to the <ALM deployment path>/wrapper
directory, and run the following command: HPALM start.
Configuring Secure Access on Linux Systems
This section describes how to configure a secure connection to and from ALM
when ALM is installed on a Linux system. For the procedure, see "Configure a
secure connection to the ALM application server (Jetty)" on the next page.
When the ALM server connects to another server, such as the LoadRunner
Enterprise server, that requires a secure connection, you must configure trust on
the ALM server to the authority that issued the remote server certificate.
For more secure communication with the ALM server, you can configure Jetty to
use TLS 1.2.
When enabling a secure connection, you should also ensure encrypted
communication with cookies by setting a site configuration parameter.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 100 of 162
In this section:
l "Configure trust on the ALM server" below
l "Configure a secure connection to the ALM application server (Jetty)" below
l "Use TLS 1.2 or TLS 1.3 instead of TLS 1.1, TLS 1.0 or SSL 3" on page 104
l "Redirect http to https" on page 105
l "Set up encrypted communication with cookies" on page 105
Configure trust on the ALM server
Configure trust on the ALM server, when ALM connects to another server over a
secure connection.
1. Obtain the certificate of the root and any intermediate Certificate Authority that
issued the remote server certificate.
2. On the ALM server, go to the java bin. For example:
/usr/java/jre/bin
3. Import each certificate into the java truststore by using a keytool command.
For example:
/usr/java/jre/bin/keytool -import -trustcacerts -alias myCA -
file <path to certificate> -keystore
"/usr/java/jre/lib/security/cacerts"
Configure a secure connection to the ALM application server
(Jetty)
1. Obtain the server certificate issued to the name of this server in java keystore
format. It must contain a private key and the certificate authority that issued it.
For details on creating certificates using the Certificate Authority, see this KB
article.
2. Verify that all users have logged out of ALM projects, and stop the ALM
Service. To stop the service, navigate to the <ALM deployment
path>/wrapper directory, and run the following command: HPALM stop.
3. Navigate to the <ALM deployment path>/server/conf directory and make a
backup of the jetty-ssl.xml file and the keystore file located in this directory.
4. Open the jetty-ssl.xml file, search for sslContextFactory, and change the
password to your password (mypass):
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 101 of 162
<Set name="KeyStorePath"><Property name="jetty.base" default="." />/<Property
name="jetty.keystore" default="conf/keystore"/></Set>
<Set name="KeyStorePassword"><Property name="jetty.keystore.password"
default="<mypass>"/></Set>
<Set name="KeyManagerPassword"><Property name="jetty.keymanager.password"
default="<mypass>"/></Set>
<Set name="TrustStorePath"><Property name="jetty.base" default="." />/<Property
name="jetty.truststore" default="conf/keystore"/></Set>
<Set name="TrustStorePassword"><Property name="jetty.truststore.password" default=" <mypass>
"/></Set>
5. (Strongly recommended) To obfuscate the password, perform the following
steps:
a. Determine the version of Jetty that you are using. Locate the <ALM
Deployment Folder>/server/lib/jetty-util-<your-jetty-version>.jar file.
<your-jetty-version> is the version of Jetty you are using.
b. Open Shell Prompt and run the following commands:
$ export JETTY_VERSION=<your-jetty-version>
<JAVA_HOME>/java -cp <ALM Deployment Folder>/server/lib/jettyutil-$JETTY_VERSION.jar
org.eclipse.jetty.util.security.Password <password>
For example, if you run the following command:
<JAVA_HOME>/java -cp <ALM deployment path>/server/lib/jettyutil-9.1.4.v20140401.jar
org.eclipse.jetty.util.security.Password changeit
The output will appear as follows:
changeit
OBF:1vn21ugu1saj1v9i1v941sar1ugw1vo0
c. Replace the plain text password in the jetty-ssl.xml file with the OBF prefix.
6. Save the jetty-ssl.xml file.
7. Edit the start.ini file and uncomment the following lines:
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 102 of 162
jetty-ssl.xml
jetty-https.xml
8. Save the start.ini file.
9. Restart the ALM Service as follows: Navigate to the <ALM deployment
path>/wrapper directory, and run the following command: HPALM start.
10. Check the wrapper.log file. If you do not see the "Server is ready!" message,
correct the errors shown in the log.
11. Connect to ALM using using the SSL connection.
12. After ensuring that the SSL connection works, disable non-HTTPS access to
the ALM Application Server. In the jetty.xml file, locate the following section
and comment it out by placing <!-- at the beginning of the section, and --> at
the end.
Note: It is possible that this section in your jetty.xml file is slightly
different.
<!--
<Call name="addConnector">
    <Arg>
        <New class="org.eclipse.jetty.server.ServerConnector">
            <Arg name="server"><Ref refid="Server" /></Arg>
            <Arg name="factories">
                <Array type="org.eclipse.jetty.server.ConnectionFactory">
                    <Item>
                        <New class="org.eclipse.jetty.server.HttpConnectionFactory">
                            <Arg name="config"><Ref refid="httpConfig" /></Arg>
                        </New>
                    </Item>
                </Array>
            </Arg>
                <Set name="host"><Property name="jetty.host" /></Set>
                <Set name="port"><Property name="jetty.port" default="8080"/></Set>
                <Set name="idleTimeout"><Property name="http.timeout" default="30000"/></Set>
        </New>
    </Arg>
</Call>
-->
13. Save the jetty.xml file.
14. Restart the ALM Service and ensure that the non-secure URL does not open.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 103 of 162
Use TLS 1.2 or TLS 1.3 instead of TLS 1.1, TLS 1.0 or SSL 3
To use TLS 1.2 or TLS 1.3 , you need to configure the jetty-ssl.xml file, and modify
the database connection string.
Note: TLS 1.3 is supported starting from ALM 16.0.1.
Configure the jetty-ssl.xml file
1. Verify that all users have logged out of ALM projects, and stop the ALM
Service. To stop the service, navigate to the <ALM deployment
path>/wrapper directory, and run the following command: HPALM stop.
2. Navigate to the <ALM deployment path>/server/conf directory and make a
backup of the jetty-ssl.xml file.
3. Open the jetty-ssl.xml file.
4. Uncomment the ExcludeProtocols section in the file:
<Set name="ExcludeProtocols">
<Array type="java.lang.String">
<Item>SSLv3</Item>
<Item>TLSv1</Item>
<Item>TLSv1.1</Item>
</Array>
</Set>
Note: You can choose your own set of supported protocols by adding or
removing items in this list.
For example, if you want to use TLS 1.3 only, add TLS 1.2 in the list.
5. Save the jetty.xml file.
6. Start the ALM Service.
Modify the database connection string
For details on configuring the database connection string to work with TLS 1.2, see
this KB article.
Oracle databases: Place the Oracle Wallet file in a location on the ALM server
where the ALM Service user has read permissions.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 104 of 162
Note: TLS 1.3 is not yet supported in Oracle or SQL Server databases.
Redirect http to https
This procedure describes how to redirect http to https. You need to redirect to
https when accessing the ALM server directly, and not through a front-end server.
1. Edit <ALM deployment path>/webapps/qcbin/WEB-INF/web.xml, and add
the following at the end (before </web-app>):
<security-constraint>
<web-resource-collection>
<web-resource-name>Everything</web-resource-name>
<url-pattern>/*</url-pattern>
</web-resource-collection>
<user-data-constraint>
<transport-guarantee>CONFIDENTIAL</transport-guarantee>
</user-data-constraint>
</security-constraint>
2. Restart ALM.
3. Access ALM via http://<ALM>:8080/qcbin.
You should be redirected to https://<ALM>:8443/qcbin. If not, ensure that
SecurePort in jetty.xml matches your secure port.
Set up encrypted communication with cookies
1. In Site Administration, click the Site Configuration tab.
2. click the New Parameter button. Enter the following information:
Parameter Value
SSO_SECURE_ONLY_COOKIE Y
Configuring Secure Database Access
This section describes how to configure a secure connection, such as Secure
Socket Layer (SSL), from the ALM server to the database server. If your database
server requires an encrypted channel, you must follow these instructions.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 105 of 162
Before beginning, determine the following:
l For SQL databases:
l Is the certificate signed by a trusted Certificate Authority (CA)? If not, obtain
the certificate chain of authority that issued your SQL server certificate and
import it into the ALM server truststore using the procedure to configure trust
on the ALM server in "Configuring Secure Access on Linux Systems" on
page 100.
l Is host name validation required? If yes, what is the host name, including the
domain name, in the server certificate?
l For Oracle databases:
l Is SSL configured? If yes:
o Place the Oracle Wallet file in a location on the ALM server where the ALM
Service user has read permissions.
o Is host name validation required? If yes, what is the host name, including
the domain name, in the server certificate?
o Is the port different than what it was before?
l If SSL is not configured:
o Is native Data Integrity configured?
o Is native Encryption configured? If yes, what is the algorithm? Is the key
larger than 128 bits?
To configure a secure database connection for a previously unsecured database:
1. For SQL databases, follow the procedure to configure trust on the ALM server
in "Configuring Secure Access on Linux Systems" on page 100.
2. Configure the Site Administration schema connection.
This section is relevant if the database server that was configured for a secure
connection contains your Site Administration schema. If you have a separate
database server for your projects and you only want a secure connection to
that database, skip this section.
a. Stop the ALM server.
b. Edit the qcConfigFile.properties file located in the deployment folder.
i. Value SaDbAction with connectToExisting
SaDbAction=connectToExisting
ii. Edit the line with dbConnectionString:
A. For SSL, add ;encrypt=true to the end of the value. For example:
jdbc:sqlserver://localhost:1433;databaseName=DBNAME;int
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 106 of 162
egratedSecurity=true;encrypt=true;trustServerCertificat
e=true
B. For Oracle, add ;javax.net.ssl.trustStore=[path to Oracle
Wallet];javax.net.ssl.trustStorePassword=[password to Oracle
wallet] to the end of the value. For example:
jdbc:oracle:thin:@(DESCRIPTION=(ADDRESS=(PROTOCOL=tcps)
(HOST=servername)(PORT=2484))(CONNECT_DATA=(SERVICE_
NAME=servicename)));javax.net.ssl.trustStore=/path/ewa
llet.p12;javax.net.ssl.trustStorePassword=password;java
x.net.ssl.trustStoreType='PKCS12'
C. For Oracle native Data Integrity, add ;oracle.net.crypto_
checksum_client =ACCEPTED or ;oracle.net.crypto_checksum_
client =REQUIRED to the end of the value, and replace the java
security policy files in ../java/jre/lib/security/.
D. For Oracle native Encryption, add ;oracle.net.crypto_checksum_
client =ACCEPTED or ;oracle.net.crypto_checksum_client
=REQUIRED to the end of the value, and, for encryption algorithms
with keys longer than 128 bits, replace the java security policy files
in ../java/jre/lib/security/.
Note: For details on java security policy files, see
https://www.oracle.com/technetwork/java/javase/download
s/jce8-download-2133166.html.
c. Run the ALM Server Configuration wizard from the ALM installation folder:
./run_configuration.sh
d. Wait until the server is reconfigured and start the ALM Service.
3. Configure the database servers:
a. Log in to Site Administration.
b. In the Database Servers tab, do the following for each database that was
configured for a secure connection:
i. Select the database and click Edit.
ii. Change the connection string:
A. For SSL, add ;encrypt=true to the end of the value.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 107 of 162
B. For Oracle, add ;javax.net.ssl.trustStore=[path to Oracle
Wallet];javax.net.ssl.trustStorePassword=[password to Oracle
wallet] to the end of the value.
C. For Oracle native Data Integrity, add ;oracle.net.crypto_
checksum_client =ACCEPTED or ;oracle.net.crypto_checksum_
client =REQUIRED to the end of the value, and replace the java
security policy files in ..\java\jre\lib\security\.
D. For Oracle native Encryption, add ;oracle.net.crypto_checksum_
client =ACCEPTED or ;oracle.net.crypto_checksum_client
=REQUIRED to the end of the value, and, for encryption algorithms
with keys longer than 128 bits, replace the java security policy files
in ..\java\jre\lib\security\.
Note: For details on java security policy files, see
https://www.oracle.com/technetwork/java/javase/download
s/jce8-download-2133166.html.
iii. Click Test Connection to check that the connection works.
iv. Click OK.
4. Configure LAB_PROJECT, if LAB_PROJECT is on a secure connection database:
a. Log in to Site Administration.
b. Go to the Site Projects tab, select LAB_PROJECT, and click Edit :
i. Click OK for any error messages that appear.
ii. The Connection String Editor (MS-SQL/Oracle) dialog box opens.
Change the connection string:
A. For SSL, add ;encrypt=true to the end of the value.
B. For Oracle, add ;javax.net.ssl.trustStore=[path to Oracle
Wallet];javax.net.ssl.trustStorePassword=[password to Oracle
wallet] to the end of the value.
C. For Oracle native Data Integrity, add ;oracle.net.crypto_
checksum_client =ACCEPTED or ;oracle.net.crypto_checksum_
client =REQUIRED to the end of the value, and replace the java
security policy files in ..\java\jre\lib\security\.
D. For Oracle native Encryption, add ;oracle.net.crypto_checksum_
client =ACCEPTED or ;oracle.net.crypto_checksum_client
=REQUIRED to the end of the value, and, for encryption algorithms
with keys longer than 128 bits, replace the java security policy files
in ..\java\jre\lib\security\.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 108 of 162
Note: For details on java security policy files, see
https://www.oracle.com/technetwork/java/javase/download
s/jce8-download-2133166.html.
iii. Click Test Connection to check that the connection works.
iv. Click OK.
v. Click Activate Project.
5. Configure all site projects on a secure connection database:
a. Log in to Site Administration.
b. Go to the Site Projects tab, select the project and click Edit:
i. Click OK for any error messages that appear.
ii. The Connection String Editor (MS-SQL/Oracle) dialog box opens.
Change the connection string:
A. For SSL, add ;encrypt=true to the end of the value.
B. For Oracle, add ;javax.net.ssl.trustStore=[path to Oracle
Wallet];javax.net.ssl.trustStorePassword=[password to Oracle
wallet] to the end of the value.
C. For Oracle native Data Integrity, add ;oracle.net.crypto_
checksum_client =ACCEPTED or ;oracle.net.crypto_checksum_
client =REQUIRED to the end of the value, and replace the java
security policy files in ..\java\jre\lib\security\.
D. For Oracle native Encryption, add ;oracle.net.crypto_checksum_
client =ACCEPTED or ;oracle.net.crypto_checksum_client
=REQUIRED to the end of the value, and, for encryption algorithms
with keys longer than 128 bits, replace the java security policy files
in ..\java\jre\lib\security\.
Note: For details on java security policy files, see
https://www.oracle.com/technetwork/java/javase/download
s/jce8-download-2133166.html.
iii. Click Test Connection to check that the connection works.
iv. Click OK.
v. Click Activate Project.
c. Perform the above step for all projects on a secure connection database.
If you have a large number of projects to update, you can run the following
SQL update query on the site administration schema:
i. In MS SQL Server: UPDATE td.PROJECTS SET DB_CONNSTR_FORMAT
= 'your new connection string'
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 109 of 162
ii. In Oracle: UPDATE [your sa schema name].PROJECTS SET DB_
CONNSTR_FORMAT = 'your new connection string'
iii. To limit the projects you update, add a where clause to the query, such
as WHERE PROJECT_NAME IN ('project1', 'project2') or WHERE
DOMAIN_NAME IN ('damain1', 'domain2')
iv. After executing the query, restart the ALM service.
To configure a secure database connection for a new ALM installation:
1. For SQL databases, follow the procedure to configure trust on the ALM server
in "Configuring Secure Access on Linux Systems" on page 100.
2. During the installing ALM, in the Database Server step, select the Connection
String option and value the field as follows:
a. For MS SQL server use this format:
jdbc:sqlserver://;serverName:1433;encrypt=true;.
If TLSv1.2 is required use this format:
jdbc:sqlserver://;serverName:1433;encrypt=true; sslProtocol=TLSv1.2;.
b. For Oracle, add ;javax.net.ssl.trustStore=[path to Oracle
Wallet];javax.net.ssl.trustStorePassword=[password to Oracle wallet]
to the end of the value.
For details, see the Oracle JDBC driver documentation.
c. For Oracle native Data Integrity, add ;oracle.net.crypto_checksum_client
=ACCEPTED or ;oracle.net.crypto_checksum_client =REQUIRED to the
end of the value, and replace the java security policy files in
..\java\jre\lib\security\.
d. For Oracle native Encryption, add ;oracle.net.crypto_checksum_client
=ACCEPTED or ;oracle.net.crypto_checksum_client =REQUIRED to the
end of the value, and, for encryption algorithms with keys longer than 128
bits, replace the java security policy files in ..\java\jre\lib\security\.
Note: For details on java security policy files, see
https://www.oracle.com/technetwork/java/javase/downloads/jce8-
download-2133166.html.
3. Complete the ALM installation.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 110 of 162
Application Server Management Tools
Since the ALM Application Server is Java-based, we recommend the following
Java tools to enable you to effectively manage ALM:
Tool Address
jconsole http://java.sun.com/developer/technicalArticles/J2SE/jconsole.html
jstack http://download.oracle.com/javase/1.5.0/docs/tooldocs/share/jstack
.html
jmap http://download.oracle.com/javase/1.5.0/docs/tooldocs/share/jmap.
html
jvisualv
m
http://download.oracle.com/javase/6/docs/technotes/tools/share/jvi
sualvm.html
Note: Jvisualvm is an all-in-one tool that was added in Java 1.6. However
jvisualvm is very memory and CPU intensive, so you may find that another
tool is more useful.
Customizing System Files
You can customize various aspects of ALM by creating or configuring system files.
This chapter includes
• Customizing Site Administration 111
• Customizing Menus 113
• Customizing the ALM Login Window 115
Customizing Site Administration
Customization of the Site Administration repository and the qcbin application,
such as editing .xsl mail stylesheets or creating custom test types, must be
performed in the ALM deployment directory. After customizing any of the files in
the deployment directory, you must redeploy ALM.
Caution: You must not modify, add, or delete files in the ALM installation
directory.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 111 of 162
This section includes:
• Customizing the Site Administration Repository 112
• Customizing the qcbin Application 112
Customizing the Site Administration Repository
Perform the following procedure to customize the Site Administration repository.
1. On the machine on which ALM is installed, open a file browser, and navigate to
<ALM installation path>\ALM\data\sa.
2. Open another file browser, and navigate to <ALM repository
path>\customerData.
3. In the installation directory, navigate to the file that you want to customize.
4. In the repository directory, under customerData, create the same folder
structure that contains the file in the installation directory.
5. Copy the file from the installation directory and paste the file in the appropriate
folder in the repository directory.
6. Edit the file in the repository directory.
7. Run the Server Deployment Wizard from <installation path>/bin/run_server_
deploy_tool.sh.
Customizing the qcbin Application
Perform the following procedure to customize the qcbin application.
1. On the machine on which ALM is installed, open a file browser, and navigate to
<ALM installation path>\ALM\application\20qcbin.war.
2. Open another file browser, and navigate to <ALM deployment
path>\application\20qcbin.war.
3. In the installation directory, navigate to the file that you want to customize.
4. In the deployment directory, under 20qcbin.war create the same folder
structure that contains the file in the installation directory.
5. Copy the file from the installation directory and paste the file in the appropriate
folder in the deployment directory.
6. Edit the file in the deployment directory.
7. Run the Server Deployment Wizard from <installation path>/bin/run_server_
deploy_tool.sh.
8. Repeat the procedure on each cluster node.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 112 of 162
Customizing Menus
You can customize the ALM Tools and Help menus by modifying the ALMClient.exe.config file on the machine on which ALM is installed.
Note: You can only perform .cab related actions on a Windows machine. To
customize menus, copy the relevant files to a Windows machine and edit the
files as necessary. Then copy the files back to the machine on which ALM is
installed and proceed as instructed.
To customize ALM:
1. On the machine on which ALM is installed, extract the ALM-Client.exe.config
file from Client.cab. This file is located in: <ALM deployment
path>\deployment\20qcbin.war\Install.
2. Open the ALM-Client.exe.config file (this is in .xml format).
3. In the Tools section of the file, you can add new items to the Tools menu.
The following is the syntax of an entry in the Tools line:
<TDFrame
Tools="<Tool_Name>,{<Tool_ID>}"
Workflow="{<Workflow_ID>}"
Parameters="<parameters>"
/>
4. To change, delete, or rearrange the list of items in the Help menu, change the
default names, IDs, and URLs listed in the OnlineHelpItem line. The following is
the syntax of an entry in the OnlineHelpItem line:
<OnlineHelpItem
ID="<Help_ID>"
Name="<Help_Name>"
Url="<Help_URL>"
To create a separator line between two items in the Help menu, use the
following syntax:
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 113 of 162
<OnlineHelpItem
ID="<Help_ID>"
Name="<Help_Name>"
Url="<Help_URL>"
IsFirstInGroup="true" />
Note: The first two menu items in the Help menu, Help on this page and
ALM Help, and the last Help menu item, About Application Lifecycle
Management Software, cannot be moved or changed. They do not have
corresponding entries in the QualityCenter.exe.config file. The above
step only affects the menu items between them.
5. Unzip the Client.cab file to a temporary folder named Client which must be
under the temp folder. For example, C:\temp\Client.
6. Replace the ALM-Client.exe.config file with the modified file.
7. Store the temporary folder on a logical drive, for example X, by running the
following command:
subst [X]: <temp folder>
For example: subst X: C:\temp
8. Create a new Client.cab file with the following command:
cabarc -r -p -P Client\ -s 6144 N <temp folder>\Client.cab
X:\Client\*.*
Note: To use this command you must first download cabsdk.exe (the
Cabinet Software Development Kit) from the Microsoft Download Center.
9. Add a class 3 digital signature to the new Client.cab file.
Note: The digital signature must be a signature of a trusted provider.
10. Under <ALM deployment path>\application\20qcbin.war, create a new
Installation folder, if it does not already exist.
11. Save the new cab file under the Installation folder.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 114 of 162
12. Run the Server Deployment Wizard from <installation path>/bin/run_server_
deploy_tool.sh.
13. Repeat the procedure on each cluster node.
Customizing the ALM Login Window
You can customize the ALM Login window, so that you can share any special
announcements or important events with users that are using the same ALM
server. When working in Windows, you can also replace the existing background
photo displayed in the ALM Login window. Users can view these changes from
their ALM Desktop Client machines.
Display a message in the the Login window
This section describes how to display a message in the Login window.
1. On the ALM server, navigate to the following directory:
Windows <Deployment path>\webapps\qcbin\Help\
(By default: C:\ProgramData\HP\ALM\webapps\qcbin\Help\)
Linux <Deployment path>/webapps/qcbin/Help/
(By default: /var/opt/ALM/webapps/qcbin/Help/)
2. Create the customization folder.
3. In the customization folder, create the following file: customizationInfo.htm.
The file name is case-sensitive.
4. Edit the customizationInfo.htm file and add content.
5. To view the content, open the ALM Login window from the ALM Desktop Client
machine.
Customize the background photo in the Login window
This section describes how to replace the background photo displayed in the Login
window.
Note:
l We recommend using a square-shaped photo. The minimum is 900 pixels
wide by 900 pixels height.
l If it takes too long for the customized background photo to download, then
the default background is displayed.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 115 of 162
1. On the ALM server, navigate to the following directory:
Windows <Deployment path>\webapps\qcbin\images
(By default:
C:\ProgramData\HP\ALM\webapps\qcbin\images)
Linux <Deployment path>/webapps/qcbin/Help/
(By default: /var/opt/ALM/webapps/qcbin/Help/)
2. Copy the customized background picture to this folder and rename it to loginbg-cust.jpg. The file name is case-sensitive.
Uninstalling ALM
You can uninstall ALM from the server machine. When uninstalling ALM, projects
are not deleted. You can also uninstall ALM client components from a client
machine that has been used to access ALM.
This section includes:
• Uninstalling ALM from Linux Systems 116
• Removing ALM Client Components from a Client Machine 117
Uninstalling ALM from Linux Systems
This section describes how to uninstall ALM from your Linux server machine.
Note: You must log on to the server machine as the same user that installed
ALM.
1. Navigate to the installation directory (the default is /root/ALM/ALM).
2. Run the Uninstall_ALM file ( ./Uninstall_ALM).
3. (Optional) To remove all traces of ALM from the machine, delete all remaining
files in the installation directory as well as the deployment path. Also delete the
/Micro Focus/ALM folders in the /var/opt directory and their files.
Note: When you remove the repository directory, all projects'
repositories are also removed. The database remains unless it is
specifically deleted.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 116 of 162
Removing ALM Client Components from a Client
Machine
When you run ALM on your client computer, client components are downloaded to
your client machine. You can use the ALM Client Cleanup add-in to remove all ALM
client components, including files and registry keys. For details and to download
the add-in, see the ALM Client Cleanup Add-in page on Marketplace.
If the client machine is used to access ALM after the cleanup add-in has been run,
all necessary components are downloaded again from the ALM server.
Installation and Upgrade Guide - Linux
ALM Installation and Configuration
ALM (16.00-16.0.1) Page 117 of 162
Project Upgrade
Upgrading Projects
Upgrading Projects describes the post-installation steps necessary for upgrading
projects from previous versions of ALM/Quality center to ALM 16.00.
To update multiple projects concurrently, use ALM Robot. For details, refer to the
Application Lifecycle Management Administrator Guide.
This chapter includes:
• Deactivate and Remove Projects from Existing ALM/Quality Center Installation 118
• Copy Project Database Schemas to the New Database Server Machine 119
• Restore ALM Projects in New Site Administration Database Schema 119
• Upgrade Projects 121
Deactivate and Remove Projects from Existing
ALM/Quality Center Installation
Note: Back up the database and repository after deactivating projects.
In the previous ALM/Quality Center installation, deactivate and remove projects
from Site Administration. You do not have to deactivate and remove all projects at
once. You can perform this action on a per-project upgrade basis.
To deactivate a project:
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a project.
3. Click the Deactivate Project or Deactivate Template button . A message
box indicates that all connected users will be disconnected.
4. Click OK to confirm. The project is deactivated and the project icon is changed
in the Projects list.
To remove a project from the Projects list:
Note: If the project is currently in use, it cannot be removed. For information
about how to manually remove a project, see this KB article.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 118 of 162
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a project.
3. Click the Remove Project or Remove Template button .
4. Click OK to confirm. If the project is still active, you are prompted to deactivate
it.
5. Click OK.
Copy Project Database Schemas to the New
Database Server Machine
Note: Perform this step only if your new ALM system uses a new database
server or new instance of the previous database server.
To restore removed projects in the new database server machine, copy the project
schemas from the database server that was used in the previous ALM system to
the database server that will be used in the new ALM system.
This enables you to restore the projects in Site Administration in the new ALM
installation.
Perform the required steps for backing up, removing, and restoring databases for
your database type. For assistance contact your database administrator.
Note: The database user must have the same permissions as the user
installing ALM.
Restore ALM Projects in New Site Administration
Database Schema
To view projects in Site Administration, on the machine on which the new version
of ALM has been installed, restore projects you removed above as follows:
Project restore considerations
l Before restoring the project, make sure that the database where the project
resides exists in the DB Servers tab in Site Administration on your ALM server.
The ALM server needs to access the contents of the restored project from the
project's database.
l When restoring a project, you should select the dbid.xml file located in the
project repository. This ensures that the project retains its original ID. If a project
does not have its original ID, the following cross project features may not
function properly: cross project customization, importing and synchronizing
libraries, and cross project graphs.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 119 of 162
l You must first restore and upgrade any template projects before restoring and
upgrading other projects. If the template project and its linked projects are in
different databases, ensure that the template project’s database is accessible
when restoring any linked projects.
To restore access to an ALM project:
1. Navigate to the project's dbid.xml file. The file is located in the project
repository's qc sub-directory.
For details on the project structure, refer to the Understanding the Project
Structure section in the Micro Focus Application Lifecycle Management
Administrator Guide.
2. Open the file and update the following values:
Note:
l To identify the values of DB_CONNSTR_FORMAT and DB_USER_
PASS, it is recommended to create a new, empty project in ALM Site
Administration, open the project's dbid.xml file, and copy these
values. You can later delete the empty project.
l Make sure not to change the original value for PR_SMART_
REPOSITORY_ENABLED.
l If you are restoring LAB_PROJECT or LoadRunner Enterprise projects
as part of the upgrade process, make sure not to edit the PROJECT_
UID value. You must restore these projects with their original
PROJECT_UID value to maintain the links between LAB_PROJECT and
its associated LoadRunner Enterprise projects. This is important for
shared data, such as timeslots, runs, and so on.
l DB_NAME. Update to the database schema name as it appears in the
database server.
l DB_CONNSTR_FORMAT. Update to the value of the empty project created
in ALM. See the note for details.
l DBSERVER_NAME. This is the name of the database server as defined in the
DB Servers tab in Site Administration.
l DB_USER_PASS. Update if the encrypted passphrase differs between the
previous installation and ALM.
l PHYSICAL_DIRECTORY. Update to the new location of the project
repository. It must contain a backslash (\) at the end of the path.
3. Save the file.
4. In Site Administration, click the Site Projects tab.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 120 of 162
5. Click the Restore Project or Restore Template button . The Restore Project
dialog box opens.
6. To locate the file that includes the project that you want to restore, click the
browse button to the right of the dbid.xml file location box. The Open File
dialog box opens.
7. Locate the project's dbid.xml file.
8. Select the dbid.xml file and click Open. The Restore Project dialog box opens
and displays the database type, name, server, and the directory path of the
project.
9. In the Restore Into Domain box, select the domain in which you want the
restored project to be located.
10. Click Restore.
11. If your database server does not have the text search feature enabled, a
message box opens. You can enable the text search feature before or after this
process completes.
l Click Yes to continue this process. After the process completes, you can
enable the text search feature.
l Click No to stop this process. Enable the text search feature and then restart
the process.
For details on enabling the text search feature, refer to the Micro Focus
Application Lifecycle Management Administrator Guide.
12. When the restore process completes, click OK.
13. Click Close to close the Restore Project dialog box and view the restored
project in the Projects list.
Upgrade Projects
Once a project appears in the ALM 16.00 Site Administration project list, you can
proceed with the actual project upgrade. You can upgrade projects individually or
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 121 of 162
on the domain level, which upgrades all projects contained in the domain. You
must first upgrade any template projects before upgrading other projects.
This section includes:
• About Upgrading Domains and Projects 122
• Upgrading a Project 123
• Upgrading a Domain 124
About Upgrading Domains and Projects
By default, the upgrade process runs in non-silent mode. When running the
process in non-silent mode, ALM may pause and prompt you for input when an
error occurs. Instead, you can choose to run the process in silent mode. When
running the process in silent mode, ALM aborts the process without prompting you
for input.
After the project has been upgraded, you can no longer use the project with a
previous version of ALM/Quality Center.
Note:
l During the upgrade process, the project directory must be accessible. For
example, if your project directory is located on a file server, ensure that the
server is running and accessible.
l During the upgrade process, no database maintenance jobs can be run.
Running database maintenance jobs can cause the upgrade to fail and can
corrupt projects.
l If a project has extensions enabled, the availability of these extensions on
the new server must be verified before upgrading. If any extension is not
available on the new server, the upgrade fails.
l You must first upgrade a template project before upgrading any of its
linked projects. If the template project and its linked projects are in
different databases, ensure that the template project’s database is
accessible when updating any linked projects.
l Version Control: Version control enabled projects cannot be upgraded
while there are checked out entities. All entities must be checked in to the
corresponding version of Quality Center or ALM. To determine if there are
checked out entities, see this KB article.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 122 of 162
Upgrading a Project
This section describes how to upgrade a single project.
To upgrade a project:
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a project.
3. Click the Maintain Project button and select Upgrade Project. The
Upgrade Project dialog box opens.
4. To run the upgrade process without any user interaction, select Run in silent
mode.
5. To start the upgrade process, click the Upgrade Project button. If the project
is active, you are prompted to deactivate it. For details, refer to the Micro
Focus Application Lifecycle Management Administrator Guide.
If a database error occurs while running the process in non-silent mode, a
message box opens. Click the Abort or Retry buttons, based on whether you
can correct the problem described in the message box.
If the upgrade fails, ALM displays an error message with reasons for the failure
and refers you to the log file. You must restore the backed up project before
you try to upgrade again. For details, see "Restoring Backed Up Projects and
Repositories" on page 58.
6. To pause the upgrade process, click the Pause button. To continue, click the
Resume button.
7. To abort the upgrade process, click the Abort button. Click Yes to confirm.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 123 of 162
8. To save the messages displayed in the Upgrade Results pane to a text file,
click the Export Log button. In the Export Log to File dialog box, choose a
location and type a name for the file. Click Save.
9. To clear the messages displayed in the Upgrade Results pane, click the Clear
Log button.
10. Click Close to close the Upgrade Project dialog box.
11. Reactivate the project.
Upgrading a Domain
This section describes how to upgrade all projects in a domain.
To upgrade a domain:
1. In Site Administration, click the Site Projects tab.
2. In the Projects list, select a domain.
3. Click the Maintain Domain button and select Upgrade Domain. The
Upgrade Domain dialog box opens.
4. In the Upgrade Settings area, under Upgrade Mode, you can select the
following options:
l Run in Silent Mode. Runs the process without any user interaction.
l Continue to next project if upgrade failed. Proceeds to the next project if
the upgrade process fails. This is the default option.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 124 of 162
5. In the Upgrade Settings area, under After the Upgrade, you can select one of
the following options:
l Leave all projects deactivated. Leaves all projects deactivated after the
upgrade process completes.
l Activate only currently active projects. Reactivates previously-activated
projects after the upgrade process completes. This is the default option.
l Activate all projects. Activates all projects after the upgrade process
completes.
6. To view the current version numbers of your projects, select the project
names, or click Select All to view version numbers for all projects. Click the
Display Versions button.
The project version number is displayed in the Version column.
7. To upgrade your projects, select the project names, or click Select All to verify
all projects. Click the Upgrade Projects button.
If a database error occurs while running the process in non-silent mode, a
message box opens. Click the Abort or Retry buttons, based on whether you
can correct the problem described in the message box.
If the upgrade fails, ALM displays an error message with reasons for the failure
and refers you to the log file. You must restore the backed up projects before
you try to upgrade again. For details, see "Restoring Backed Up Projects and
Repositories" on page 58.
8. To pause the upgrade process, click the Pause button. To continue, click the
Resume button.
9. To abort the upgrade process, click the Abort button. Click Yes to confirm.
10. To save the messages displayed in the Upgrade Results pane in a text file, click
the Export Log button. In the Export Log to File dialog box, choose a location
and type a name for the file. Click Save.
11. To clear the messages displayed in the Upgrade Results pane, click the Clear
Log button.
12. Click Close to close the Upgrade Domain dialog box.
Migrating the Project Repository
This chapter describes the process of migrating a Quality Center 10.00 project
repository to the optimized repository architecture used in ALM. ALM versions
11.00 and later use a new project repository architecture, that is optimized to allow
maximum storage space.
When you upgrade from Quality Center 10.00 to ALM, you must migrate the project
repository. You can perform the migration as part of the upgrade from Quality
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 125 of 162
Center 10.00 to ALM 11.52, or after upgrading from ALM 11.52 or later to ALM
16.00.
For details on ALM Optimized Project Repository, refer to the Micro Focus
Application Lifecycle Management Administrator Guide.
This chapter includes:
• About the Repository Migration 126
• Repository Migration Status Window 127
• Configure Migration Priority 129
About the Repository Migration
When upgrading projects, the project repository is automatically upgraded to the
optimized repository format. This is carried out in two stages:
1. The first stage is performed during the upgrade of the project. In this stage, all
files in the repository are scanned, and their names are stored in the project
database.
2. After the upgrade is completed, the project is reactivated. The repository files
are gradually migrated to the new system. In this stage, the files are moved
from their old location to their new location in the optimized repository.
Depending on various factors, such as the size of the repository and the
network speed, the file migration may take up to several days.
This second phase of the repository migration is carried in the background.
Users can work in the project even while it is in progress. New files that you
add to a project after upgrade are saved in the new project repository
structure.
Note:
l Until the migration process for a project is complete, you cannot export or
copy the project.
l To back up a project before its migration is complete, you must suspend
the migration process. For details, see"Configure Migration Priority" on
page 129.
You monitor and troubleshoot the migration progress in the Repository Migration
Status window.
In Site Administration, you can track the status of file migration for each project,
and configure the speed of performing the migration.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 126 of 162
Repository Migration Status Window
This window lists all the site projects and displays the status of their migration to
the optimized project repository.
To access In Site Administration, select Tools > Repository Migration Status.
See also l "Migrating the Project Repository" on page 125
l "Configure Migration Priority" on page 129
User interface elements are described below:
UI Element Description
Instructs ALM to resume the migration of the selected project.
If an error or warning was detected during the migration of the
selected project, fix the problem as described in the
Additional Information field, and click Resume.
Downloads a log of the migration events associated with the
selected project.
Refresh. Refreshes the display with the most up-to-date
information.
Note: The grid updates automatically after the migration
of every 1000 files.
Domain Name The domain to which the selected project belongs.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 127 of 162
UI Element Description
Project Name The name of the selected project.
Project Status Indicates the selected project's status in Site Administration.
For example, Active or Deactivated.
Note: Deactivating a project does not affect its
repository migration.
Migration
Status
The migration status of a project can be one of the following:
l None. Project is not upgraded to ALM 16.00, and will not be
migrated.
l Pending. File migration is pending.
l Migrating. File migration is in progress.
l Done. File migration is complete.
l Error. An error occurred during file migration, and migration
could not be completed. See the cause of the error in the
Additional Information panel. Fix the error, and click
Resume.
l Warning. A warning occurred during file migration.
For details of the warning, and the actions you must take to
resolve the problem, download the log files listed in the
Additional Information panel. Resolve the problems as
necessary, and click Resume to complete the migration.
The reason for a warning is files in the old repository
structure that must be handled manually. Handling these
files is the last step before completing the migration.
Migration
Progress
The number of project files migrated to the new repository, as
a percentage of the total number of project files.
Additional
Information
If a problem was detected, displays the cause of the problem,
and links to log files. The log files describe the actions you
must take to resolve the problem.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 128 of 162
UI Element Description
Site
Administrator
Automail
Options
ALM sends automail to Site Administrators upon events
connected to repository migration. Select the following
options:
l Send mail on success. Sends mail when the migration of a
project repository completes successfully.
l Send mail on warning. Sends mail when a warning is
detected during the migration of a project repository.
l Send mail on error. Sends mail when an error is detected
during the migration of a project repository.
l Include logs as attachments. Attaches detailed log files to
automail messages.
The default is to send mail when warnings or errors are
detected, without attaching logs.
Summary Summary information of the migration status of all site
projects.
Configure Migration Priority
While the migration process does not interfere with your work on projects, the
process may affect system performance as a whole. Use the following site
configuration parameters to control the amount of system resources used by the
migration process.
l REPOSITORY_MIGRATION_JOB_PRIORITY. Determines the speed at which files
are copied from the old to the new project repository. For details, refer to the
Micro Focus Application Lifecycle Management Administrator Guide.
l SUSPEND_REPOSITORY_MIGRATION. Stops the repository migration on the
entire site. Use this parameter temporarily, and only in special circumstances.
For example, if you suspect that the migration process disrupts your system. For
details, refer to the Micro Focus Application Lifecycle Management
Administrator Guide.
Additional parameters are available for configuring the resources allocated to the
migration process. For details, see this KB article.
Consider the following when configuring the migration priority:
l Allocating more resources to the migration process may slow down other
processes.
l Allocating less resources extends the time in which the process is completed.
l Projects that are pending migration or in the process of migration cannot be
exported or copied.
Installation and Upgrade Guide - Linux
Project Upgrade
ALM (16.00-16.0.1) Page 129 of 162
Appendix
Installation and Upgrade Guide - Linux
Appendix
ALM (16.00-16.0.1) Page 130 of 162
Appendix A: Troubleshooting the ALM Installation
This appendix contains troubleshooting suggestions for issues relating to the ALM installation.
This appendix includes:
• Disabling Validation Checks for the Installation Wizard 131
• Checking the Installation and Configuration Log Files 133
• ALM Installation Already Exists 134
• Database Validator Fails 134
• Monitoring ALM Server Fails 135
Disabling Validation Checks for the Installation Wizard
The ALM Installation Wizard automatically performs validation checks to verify that particular system
configurations requirements are met. If the ALM configuration does not complete due to a failed
validation, you can fix the problem or disable selected validation checks, and rerun the installation.
Note:
l You should disable validation checks only if you decide to take responsibility for the ALM
server installation.
l To resolve failures that occur during the ALM Installation Wizard, see "Checking the
Installation and Configuration Log Files" on page 133.
l For troubleshooting tips on database validations, see "Database Validator Fails" on page 134.
To disable configuration validators and rerun the ALM Installation Wizard in Linux:
1. In the ALM installation directory, locate the validations.xml file, which is near the installation
executable ( ALM_installer.bin).
2. Edit the validations.xml file by changing the validation value from true to false as required.
Following is an example of the file with all configuration validators active.
<validations>
        <os enabled="true" />
        <memory enabled="true" threshold="8" />
        <installation_disk_space enabled="true" threshold="8" />
        <sa-schema enabled="true" />
        <db enabled="true" />
        <mail enabled="true" />
        <license-key enabled="true" />
        <repository enabled="true" />
        <sa-user enabled="true" />
        <security enabled="true" />
        <alm-services enabled="true" />
        <web-server enabled="true" />
</validations>
3. Save the file and rerun the installation.
Configuration Validators
Validator Checks To Disable
os Checks that the operating system is supported.
Note: For the most up-to-date supported environments,
see http://admhelp.microfocus.com/alm/specs/alm-qcsystem-requirements.htm.
<os
enabled="false"
/>
memory Checks that the customer machine has at least x GB of
memory (x is defined by the threshold value, the default is 8
GB).
<memory
enabled="false"
/>
installation_
disk_space
Checks that the installation location has at least x GB of free
disk space (x is defined by the threshold value, the default is 8
GB).
Note: This validation is related only to the installation
location. If the installation fails because of a lack of free
space in the temporary folder, changing the threshold
value or disabling this validation does not affect the
failure.
<installation_
disk_space
enabled="false"
/>
Validator Checks To Disable
sa-schema Checks Site Administration database settings. <sa-schema
enabled="false"
/>
db Checks database connectivity. <db
enabled="false"
/>
mail Checks that the mail server is valid. <mail
enabled="false"
/>
license-key Checks the license file key. <license-key
enabled="false"
/>
repository Checks that the repository folder is accessible, and has
sufficient space.
<repository
enabled="false"
/>
sa-user Checks site administrator user settings. <sa-user
enabled="false"
/>
security Checks encryption passphrases. <security
enabled="false"
/>
alm-services Checks Windows service settings. <alm-services
enabled="false"
/>
web-server Checks that the HTTP port and web server deployment folder
is accessible, and has sufficient space
<web-server
enabled="false"
/>
Checking the Installation and Configuration Log Files
If you encounter problems installing ALM, check for errors in the following log files:
Delivery Logs
Log Path
Install Completed <installation folder>/ALM/log
Install Failed in the user's home folder:
Application_Lifecycle_Management_Install_<mm_dd_yyyy_hh_mm_ss>.log
Application Logs
Log Path
Configuration logs <ALM deployment folder>/log
Site Administration database schema creation logs <ALM deployment folder>/log/sa
ALM Installation Already Exists
After uninstalling a previous version of ALM, an error message displays while installing a later version,
indicating that ALM already exists.
Perform the following steps:
1. Navigate to the C:/ProgramData directory.
2. Locate the the InstallAnywhere global registry file (hidden file), search for
.com.zerog.registry.xml. Edit the file and remove the sections related to ALM and its
components.
3. Locate the .com.zerog.registry.xml.swp (hidden file). If the file exists, delete it.
Database Validator Fails
During the ALM Server configuration, the database validator performs the following checks:
l Check that the input parameters are correct.
l Check that the Site Administration database schema name was provided.
l Check whether the same authentication type was used as the one used in the previous installation.
Perform the following steps:
1. Check whether the parameters are correct:
l Read the error message that displays during installation and try to understand and resolve the
problem from the root cause.
l For further clarifications, check with your database administrator.
l If no error was found and you are sure that the parameters are correct, disable the DB
parameters validator. For details, see "Disabling Validation Checks for the Installation Wizard"
on page 131.
2. Check that the Site Administration Database Schema name was provided:
a. Open a database query tool.
b. Make sure the PROJECTS table exists in the Site Administration Database Schema. This table
does not exist in the project schema.
3. To check the authentication type of a previous installation:
a. Navigate to <ALM installation path>\ALM\application\20qcbin.war\WEB-INF and open the
siteadmin.xml file in a text editor.
b. Search for the native property. If its value is set to Y, Windows authentication was used. Make
sure that the new installation uses the same authentication type (Microsoft SQL Server
authentication or Windows authentication) as the previous installation.
Monitoring ALM Server Fails
When running one of the Java-based tools to monitor ALM you receive the following message:
"Not enough storage is available to process this command."
This problem is caused because the JVM running the ALM Server is running with a service account.
Choose one of the following solutions, depending on which tool you are running:
l jmap and jstack. See the suggestion in the following link:
http://stackoverflow.com/questions/906620/jstack-and-not-enough-storage-is-available-toprocess-this-command
You will be required to download the pstools tool from the following address:
http://technet.microsoft.com/en-us/sysinternals/bb897553
l jconsole and jvisualvm. Download the following tool from the following address:
http://www.iopus.com/guides/srvany.htm
Also refer to the following Microsoft article: http://support.microsoft.com/kb/137890
Appendix B: Upgrade Preparation Troubleshooting
This appendix describes schema and database inconsistencies that the verification process detects.
It indicates which problems the repair process can fix automatically, and which you should repair
manually. Suggested solutions for repairing each issue are provided.
This appendix includes:
• Overview 136
• Quick Warning Reference 137
• General Validation 140
• Schema Validation 144
• Data Validation 153
• Changing the Database User Schema 157
Overview
The verification process, described in "Verifying Domains and Projects" on page 50, detects
inconsistencies and indicates which problems the repair process can fix automatically, and which you
should repair manually. Suggested solutions for repairing each issue are provided in this appendix.
If an error is displayed during the verification or upgrade process, you can see error descriptions at
this KB article.
If a warning is displayed during the verification process, you can use the "Quick Warning Reference"
on the next page to locate the corresponding solution for that warning.
Some solutions require that you change the database user schema:
l Database User Schema. Database in SQL Server and a user schema in Oracle. This term is used for
both cases because ALM can be deployed over SQL Server and Oracle. Both cases are logical sets
of database objects (for example, tables, indexes, and so on) owned by the same logical owner.
l Expected Database User Schema. ALM Database User Schema configurations, as defined in the
configuration file for a new ALM Database User Schema. As a preparation for the current version,
each project database user schema should be aligned with the latest configurations, as defined in
this schema.
If you need to modify the database user schema, see the additional instructions under "Changing the
Database User Schema" on page 157.
Quick Warning Reference
This section lists schema and data issues found in warnings generated by the verification process.
• General Issues 137
• Schema Issues 138
• Data Issues 139
General Issues
The following table lists general issues found in verification process warnings. Some issues are fixed
automatically by the repair process. Other issues require that you repair them manually.
Type Problem Resolution Details
Database Database server
version not supported
manual repair "Supported Database
Version" on page 141
Database Schema name contains
invalid characters
manual repair "Valid Database User
Schema Name" on
page 141
Database Table owner does not
match the ALM server
connection method
manual repair "Mixed Table
Ownership" on
page 141
Database Repository over
database feature no
longer supported
manual repair Repository over
Database Feature
Version control Certain version control
projects cannot be
upgraded directly
manual repair Version Control
Validation
Database Permissions manual repair "Database
Permissions" on
page 142
Database Configure text search manual repair "Text Search
Configuration" on
page 142
Schema Issues
The following table lists schema issues found in verification process warnings. Some schema issues
are fixed automatically by the repair process. Other schema issues require that you repair them
manually.
Type Problem Element Resolution Details
Table Extra table manual
repair
"Extra Table" on
page 145
Table Missing table repair
process
"Missing Table" on
page 145
Views Extra view manual
repair
"Extra Views" on
page 155
Views Missing view repair
process
"Views" on page 155
Column Extra column manual
repair
"Extra Column" on
page 146
Column Missing column repair
process
"Missing Column" on
page 148
Column Size mismatch - column size
bigger than expected
manual
repair
"Column Size
Mismatch" on page 147
Column Size mismatch - column size
smaller than expected
repair
process
"Column Size
Mismatch" on page 147
Column Type mismatch manual
repair
"Column Type
Mismatch" on page 147
Column Precision repair
process
"Column Precision
Mismatch" on page 147
Column Nullable - column can accept
NULL values
repair
process
"Column Nullability
Mismatch" on page 148
Index Uniqueness repair
process
"Index Uniqueness
Mismatch" on page 150
Type Problem Element Resolution Details
Index Clustered repair
process
"Index Clustered" on
page 150
Index Extra manual
repair
Internal Changes
Index Missing repair
process
"Missing Index" on
page 150
Constraint Missing repair
process
"Missing Constraint" on
page 150
Constraint Extra manual
repair
"Missing Constraint" on
page 150
Index Changed repair
process
"Index Changed" on
page 151
Triggers Extra manual
repair
"Extra Trigger" on
page 151
Sequence Missing repair
process
"Missing Sequence" on
page 152
Sequence Extra manual
repair
"Extra Sequence" on
page 152
Sequence Incorrect repair
process
"Incorrect Sequences"
on page 152
Data Issues
The following table lists data issues found in the verification process warnings. Some data issues are
fixed automatically by the repair process. Other data issues require that you repair them manually.
Type Problem Element Resolution Details
Duplicate
data
Duplicate
values
repair
process
"Duplicate
Values" on
page 153
Type Problem Element Resolution Details
Duplicate
data
Duplicate IDs repair
process
"Duplicate IDs" on
page 153
Trees Wrong
number of
children
Tables REQ/ALL_LISTS/CYCL_
FOLD
repair
process
"Tree
Inconsistencies"
on page 154
Trees Corrupted
path
Tables REQ/ALL_LISTS/CYCL_
FOLD
repair
process
"Tree
Inconsistencies"
on page 154
Trees Orphan
records
Tables REQ/ALL_LISTS/CYCL_
FOLD
repair
process
"Tree
Inconsistencies"
on page 154
Sequences Sequence
mismatch
Table SEQUENCES repair
process
"Sequences" on
page 152
Orphans Missing
parent entities
repair
process
"Orphaned
Entities" on
page 155
Missing data Missing
entities
repair
process
"Missing Entities"
on page 156
Lists Missing lists
and values
Tables SYSTEM_FIELD / LISTS repair
process
"Missing Lists
and/or List
Values" on
page 156
Encryption Mismatched
passphrases
for encrypted
values
Tables LAB_HOSTS / LAB_AUT_
HOSTS / LAB_DIAGNOSTICS_
SERVERS
manual
repair
Encrypted Values
General Validation
This section describes the general validation checks the verification process performs.
• Supported Database Version 141
• Valid Database User Schema Name 141
• Mixed Table Ownership 141
• Database Permissions 142
• Text Search Configuration 142
Supported Database Version
The verification process checks that the project schema is stored in a supported database server. If
the verification process detects that the database server version is not supported, it displays a
warning.
Note: For the most up-to-date supported environments, see
http://admhelp.microfocus.com/alm/specs/alm-qc-system-requirements.htm.
Valid Database User Schema Name
The upgrade mechanism does not support databases that include special characters in the database
name. If the verification process finds special characters, you must remove them. For SQL databases,
periods are also not supported in the database user schema name.
To remove special characters from database names:
1. Deactivate the project.
2. Ask your database administrator to rename the database user schema to a name that does not
include special characters, or periods for SQL databases.
3. Remove the project from Site Administration.
4. Update the Dbid.xml file to point to the new database user schema name.
5. Restore the project by using the updated Dbid.xml file.
6. Run the verification process again to make sure the problem is resolved.
Mixed Table Ownership
ALM can connect to Microsoft SQL server by using SQL authentication or Windows authentication.
For each of these methods, a different user owns the tables of a project:
l SQL Authentication. Table owner is the user td.
l Windows Authentication. Table owner is the user dbo (a user mapped to the operating system
user that runs the ALM server).
If you create a project with one type of authentication (for example, SQL), and then restore it with the
other type of authentication (for example, Windows), these tables cannot be accessed. In this case,
new tables are created with owners that are different from those of the old tables. You will not be able
to work with the project. It is likely that the upgrade will fail.
To prevent this problem, the duplicate ownership validator checks that the owner of all of the tables in
the project database user schema matches the connection method that ALM is using to connect to
the server.
To fix table ownership manually, do one of the following:
l SQL Authentication: Run the following query to make td the table owner:
EXEC sp_changeobjectowner '<table name>', 'td'
l Windows Authentication: Run the following query to make dbo the table owner:
EXEC sp_changeobjectowner 'td.<table name>', 'dbo'
Database Permissions
To enable an upgrade to the current ALM version, the project schema requires a set of minimum
required permissions. The verification process makes sure that both the project user and the
administrator user have all the privileges needed to perform the upgrade.
Text Search Configuration
If your database does support text search, ALM installs the required components when creating a
new project database. ALM also activates the text search for the new database. The verification
process checks whether your project has the text search feature enabled, and that it is configured
correctly.
The verification process validates the following:
l "Validity of the Text Search Configuration" below
l "Only Valid Fields Configured Under "Text Search"" on the next page
l "Text Search Validation for Oracle Database Server" on the next page
l "Text Search Validation for Microsoft SQL Database Server " on page 144
Validity of the Text Search Configuration
The verification process checks that text search components are installed and are valid on the
database server. If a database server is text search-enabled in the DB Servers tab in Site
Administration, text search must also be enabled on the Oracle or SQL database server. If the
verification process detects that text search is not enabled or configured incorrectly on the Oracle or
SQL database server, the upgrade process does not run until you manually repair the problem.
We recommend that you ask your database administrator to reconfigure text search on the Oracle or
SQL database server. Alternatively, as a workaround, you can disable text search for the database
server from Site Administration.
To disable the text search for the database server:
1. Run the following query on your Site Administration schema:
update <SA Schema>.dbservers set db_text_search_enabled = null where dbserver_name
= '<DB logical name>'
2. Restart the ALM server.
3. Run the repair process for your projects.
4. When the repair process completes, run the following query:
update <SA Schema>.dbservers set db_text_search_enabled = 'Y' where dbserver_name =
'<DB logical name>'
5. Restart the ALM server.
Only Valid Fields Configured Under "Text Search"
The verification process checks that only valid fields are defined as searchable. You can enable the
text search only for specific entities, and only on fields of the type string or memo. The following
entities are supported: BUG, COMPONENT, COMPONENT_STEP, DESSTEPS, REQ, TEST, BPTEST_
TO_COMPONENT, and CYCLE. Any other configuration could cause functionality problems during
upgrade or customization. This problem is fixed automatically by the repair process.
Text Search Validation for Oracle Database Server
For an Oracle Database server, the verification process checks the following:
l Validity of Text Search Indexes. The verification process checks that database text search
indexes are valid. Invalid text search indexes can cause functionality problems and even upgrade
failure in ALM. If the verification process detects an invalid index, try to recreate the index by
dropping it from the schema and creating it again. In Site Administration, click the Site Projects tab.
Select the relevant project and click the Enable/Rebuild Text Search button. If this procedure
returns an error, consult your database administrator or contact Micro Focus Support.
l Validity of Project Database User Permissions. The verification process checks that the project
database user has the required permissions to work with text search. When text search is installed
on the database, the role CTXAPP is created automatically. ALM requires that this role be granted
to all projects database users that support text search. (ALM grants the CTXAPP role automatically
when creating the project or enabling the text search for a project.) If this role is not granted to the
project database user (configured to support text search), the verification process returns a
warning. In these cases, ask your database administrator to grant the required role to the project
database user.
Text Search Validation for Microsoft SQL Database Server
The verification process checks that the project database user schema enables the text search
feature. To work with text search on SQL project, you need to enable the text search on the database.
To enable text search on the database:
1. Select the database from the SQL server Enterprise Manager.
2. Right-click the database name.
3. Select Properties/Files.
4. Select Use Full-Text Indexing.
Schema Validation
The verification process helps to ensure that the project database user schema is correct and
configured as expected.
The verification process performs two types of schema verifications:
l Schema Correctness. Checks that the project database schema includes all of the required
schema objects, as defined in the expected database user schema for the project. This verification
ensures that all of the required entities exist and are defined as expected. It also ensures that there
are no extra entities defined on top of the schema.
l Alignment to the current version. Notifies you about differences in the project database user
schema caused by internal changes made in Quality Center or ALM. In this way, the verification
process aligns the schema with the latest internal changes to the schema made in preparation for
the upgrade.
The verification process displays warnings in the verification report if it finds the following:
l Extra entities defined. For example, Table, Column, Trigger, View, and Sequence.
l Differences from the expected definitions. For example, Column Size and Index Attributes.
l Missing objects.
Schema differences found by the verification process can cause upgrade failures or usage problems.
As long as the verification process still finds these differences, an upgrade to the current ALM version
will not start.
Note: Many of the schema changes can be fixed automatically by the repair process.
The following sections contain possible warnings, grouped by the different database objects, that the
verification process can display in the verification report:
• Tables 145
• Columns 146
• Indexes and Constraints 149
• Triggers 151
• Sequences 152
Tables
Database tables can contain the following warnings:
l "Extra Table" below
l "Missing Table" below
Extra Table
The ALM schema should contain only the tables that are defined in the schema configuration file.
Adding extra tables on top of the schema is not supported and might cause future problems with
ALM.
Problem: If the verification process finds extra tables that were added manually to the schema, it
generates an Extra Table warning.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Do one of the following:
l Change the Schema. If you use the table, copy it to a different schema. If you do not use the table,
delete it. Before taking either action, back up the schema and consult your database administrator.
For details, see "Changing the Database User Schema" on page 157.
l Use the Exception File. For details about the Exception file, see "Define an Exception File" on
page 51.
If the project database is case sensitive, the table name must be the same in both the database and
the exception file.
Note: Not recommended: Instruct the upgrade to ignore this problem.
Missing Table
The verification process checks that all of the tables defined for the project schema actually exist
(according to the tables of each Quality Center/ALM version).
Problem: If a table is missing, the verification process generates a Missing Table warning.
Solution: Do one of the following:
l See "Changing the Database User Schema" on page 157.
l Run the repair process to create the missing table. Although you can use the repair process to add
these objects, we recommend that you contact Micro Focus Support to make sure that the missing
objects are not just symptoms of a bigger problem.
Columns
Database columns can contain the following warnings:
l "Extra Column" below
l "Column Size Mismatch" on the next page
l "Column Precision Mismatch" on the next page
l "Column Type Mismatch" on the next page
l "Column Nullability Mismatch" on page 148
l "Identity Column" on page 148
l "Missing Column" on page 148
Extra Column
The verification process checks that each table includes the required columns, as defined for the
expected database user schema and version. The schema should not include extra columns. Extra
columns in a table might cause upgrade failure or functionality problems.
Problem: If the verification process detects an extra column (that does not exist in the database user
schema definitions) in one of the tables, it generates an Extra Column warning.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Do one of the following:
l Change the Schema. If you have an internal implementation that requires extra table columns,
move the extra columns to a different table in a different schema. If you do not use a particular
column, delete it. Before taking either action, back up your schema and consult your database
administrator. For a more detailed explanation, see "Changing the Database User Schema" on
page 157.
l Use the Exception File. For details about the Exception file, see "Define an Exception File" on
page 51.
Note: Not recommended: Instruct the upgrade to ignore this problem.
Column Size Mismatch
The verification process checks that all the table columns are defined as expected. This validation
ensures that the column size matches the expected size as defined for each table column. This
verification excludes user-defined fields, whose size can be customized through project
customization.
Some column mismatch warnings are caused by internal changes made in Quality Center 10.00 that
are fixed by the repair process automatically. For details, see Internal Quality Center Changes.
Problem A: Size is bigger than expected. If the column size is bigger than expected, decrease the
column size to the required size manually. Because this operation can cause data loss, it is not
performed automatically by repair process.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution A: Consult your database administrator to resolve this issue. For risks involved in changing
the database user schema, see "Changing the Database User Schema" on page 157.
Problem B: Size is smaller than expected. If the column size is smaller than expected, the repair
process fixes the problem automatically by increasing the column size to the expected size.
Solution B: Run the repair process to increase the current size to the required size.
Column Precision Mismatch
In an Oracle Database, "precision" is the term used to define the size of fields with the INTEGER type.
Problem: The verification process generates a warning if the precision defined for a certain column is
smaller than expected.
Solution: Run the repair process to increase the current precision to the required precision.
Column Type Mismatch
Changing a column type causes the upgrade to fail, and can cause major functionality problems.
Problem: The verification process generates a Column Type warning if the column type has
changed.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Consult your database administrator to resolve this issue. For risks involved in changing the
database user schema, see "Changing the Database User Schema" on page 157.
Column Nullability Mismatch
One of the attributes that is defined for a column is whether it can accept null values. A null is the
absence of a value in a column of a row. Nulls indicate missing, unknown, or inapplicable data. If you
have defined a NOT NULL or PRIMARY KEY integrity constraint for a particular column, you cannot
insert rows into the column without adding a value.
Problem: The verification process compares the required definitions for each column in the expected
database user schema to the project database user schema. If it encounters differences in the
column NULL attribute definition, it generates a Column Nullable warning.
Solution: Run the repair process. The repair process runs a query to modify the column attributes to
the expected attributes.
If the column includes NULL values, the repair process cannot update the column attribute to NOT
NULL (if this is the required attribute) for the column. Ask your database administrator how to remove
the NULL values from the column. After removing the NULL values, run the repair process again. For
details, see "Changing the Database User Schema" on page 157.
Identity Column
The IDENTITY property is one of the attributes defined for columns in Microsoft SQL server.
Problem: As part of the verification for the columns attributes, the verification process might find a
column IDENTITY property that is not configured as expected.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Change the IDENTITY property of the column to the expected configuration (according to
the output from the verification process report) manually. Consult your database administrator to
resolve this issue. For details, see "Changing the Database User Schema" on page 157.
Missing Column
If a column is missing from a table, run the repair process or contact Micro Focus Support.
Problem: If the verification process finds that a column is missing from one of the tables, it generates
a Missing Column warning.
Solution: Do one of the following:
l Run the repair process to fix the problem.
l See "Changing the Database User Schema" on page 157.
Indexes and Constraints
A database index is a data structure that improves the speed of operations in a table. You can create
indexes using one or more columns, providing the basis for both rapid random lookups and efficient
ordering of access to records. Database Constraints are constraints on the database that require
relations to satisfy certain properties.
Database indexes and constraints can cause the following validation warnings:
l "Extra Index" below
l "Extra Constraint" below
l "Index Uniqueness Mismatch" on the next page
l "Index Clustered" on the next page
l "Missing Constraint" on the next page
l "Missing Index" on the next page
l "Index Changed" on page 151
l "Index Order Changed " on page 151
Extra Index
The ALM schema should include only those indexes defined in the required schema configurations.
Problem: If the verification process finds an index that is not defined in the required schema
configuration, it generates an Extra Index warning.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Remove the extra indexes manually. Consult with your database administrator to resolve
this issue. For details, see "Changing the Database User Schema" on page 157.
Extra Constraint
The ALM schema should include only those constraints defined in the required schema
configurations.
Problem: If the verification process finds a constraint that is not defined in the required schema
configuration, it generates an Extra Constraint warning.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Remove the extra constraint manually. Consult with your database administrator to resolve
this issue. For details, see "Changing the Database User Schema" on page 157.
Index Uniqueness Mismatch
A unique index guarantees that the index key contains no duplicate values. As a result, every row in
the table is unique. Specifying unique indexes on ALM data tables ensures data integrity of the
defined columns. In addition, it provides helpful information that is used as a query optimizer.
Problem: If the index uniqueness attribute does not have the expected value, the verification process
generates an Index Uniqueness Mismatch warning.
You cannot create a unique index, unique constraint, or PRIMARY KEY constraint if duplicate key
values exist in the data. The verification process performs these data validations. If a table has
duplicate values or IDs, based on the index definitions on that table, the verification process also
displays the duplication in the verification report. In this case, the repair process automatically fixes
the duplication problem before creating the unique index.
Solution: Run the repair process to fix the problem.
Index Clustered
In Microsoft SQL, index type can be classified as clustered or non-clustered. The verification process
compares the required definitions for each index in the expected database user schema to the project
database user schema.
Problem: If the verification process finds differences in the index clustered attribute definition, it
generates an Index Clustered warning.
Solution: Run the repair process to fix the problem.
Missing Constraint
Constraints are rules that the database enforces to improve data integrity.
Problem: If the verification process finds a constraint that should be defined as missing, it generates
a Missing Constraint warning.
Solution: Run the repair process to fix the problem.
Missing Index
The verification process checks that all the required indexes (as defined in the expected database
user schema) exist in the projects database user schema.
Problem: If the verification process does not find all the required indexes in the projects database
user schema, it generates a Missing Index warning.
Solution: Run the repair process to fix the problem.
Index Changed
The verification process checks that the indexes are defined according to the expected database
user schema.
Problem: If the verification process finds an index that is not defined according to the expected
database user schema, it generates an Index Changed warning.
This warning can indicate the following problems:
l Function in a function-based index is different than expected.
l Index is not defined on the expected columns.
Solution: Run the repair process to fix the problem. The repair process removes the index, and then
recreates it, based on the required definitions for this index.
Index Order Changed
The verification process checks that the order of the columns in the index definition has not changed.
Problem: If the order of the columns in the index definition has changed, the verification process
generates an Index Order Changed warning.
Solution: Run the repair process to fix the problem. The repair process removes the index, and then
recreates it, based on the required definitions for this index.
Triggers
A database trigger is procedural code that is automatically executed in response to certain events on
a particular table in a database.
Database triggers can contain the following warning:
l "Extra Trigger" below
Extra Trigger
Extra triggers can cause upgrade failures and functionality problems.
Problem: If the verification process finds an extra trigger, it generates an Extra Trigger warning.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Before upgrading, back up your database schema and remove the extra triggers manually.
Because extra triggers can cause upgrade failures, the upgrade process cannot ignore this warning
by using the Exception file. For details, see "Changing the Database User Schema" on page 157.
Sequences
A sequence is an Oracle object that acts as a generator that provides a sequential series of numbers.
Database sequences can contain the following warnings:
l "Extra Sequence" below
l "Missing Sequence" below
l "Incorrect Sequences" below
Extra Sequence
ALM schemas should contain only the sequences that are defined in the schema configuration file.
Problem: If the verification process finds an extra sequence, it generates an Extra Sequence
warning.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Do one of the following:
l Change the Schema. Move the sequence to a new database user schema. Before doing so, consult
with your database administrator. For details, see "Changing the Database User Schema" on
page 157.
l Use the Exception File. For details about the Exception file, see "Define an Exception File" on
page 51.
Note: Not recommended: Instruct the upgrade to ignore this problem.
Missing Sequence
Problem: If the verification process finds that one of the sequences that should be defined on the
ALM schema is missing, it generates a Missing Sequence warning.
Solution: Do the following:
l Run the repair process to fix the problem.
l See "Changing the Database User Schema" on page 157.
Incorrect Sequences
Problem: Sometimes the Oracle object sequence numbers become incorrect, for example, if an
export of the database is done on a live activated project, in which users are still modifying tables. If
the verification process finds that Oracle sequences objects are not fully synchronized with ALM
schema table IDs, the verification process generates an Incorrect Oracle sequences found warning.
Solution: Run the repair process to fix the problem.
Data Validation
One of the main functions of the verification process is to ensure that the project database contains
valid data.
The verification process helps you find and fix the following problems:
• Duplicate Values 153
• Duplicate IDs 153
• Tree Inconsistencies 154
• Views 155
• Orphaned Entities 155
• Missing Entities 156
• Missing Lists and/or List Values 156
Duplicate Values
Some fields (or a combination of fields) must be unique in given tables. This constraint is enforced by
the creation of a unique index on these fields. For example, the combination of fields TS_SUBJECT
and TS_NAME, which represent the ID of the test's parent folder and test name, must be unique. It is
not possible to create two tests with the same name under the same folder. In rare cases, a corrupted
database contains duplicate values in these fields.
Problem: The verification process checks that all unique indexes exist (and therefore enforce unique
values). If the verification process finds duplicate values, it does not permit the upgrade to run on the
project.
The verification report specifies the fields in which there are duplications and number of duplicate
values found, as shown below.
Solution: Automatic Repair. Run the repair process to automatically handle the duplicate values. The
repair process renames the duplicate values to resolve the problem.
Duplicate IDs
Most tables have a unique primary key, usually a unique single column. If there are duplicate values in
this field, the primary key is not created.
For example, in a table called test, the column TS_TEST_ID represents the test ID, which is unique. In
rare cases, a corrupted database contains duplicate IDs.
Problem: The verification process checks that all IDs in a table are unique. If it finds duplicate IDs, it
does not permit the upgrade to run on the project.
The verification report specifies the fields in which there are duplicate items and values, as shown
below.
Solution: Automatic Repair. The repair process automatically deletes one of the records with a
duplicate ID.
Caution: This option assumes that the entire record is duplicated, and that the duplicated
record is not accessible from the ALM user interface. Because there can be exceptions, we
recommend that you use this option only after verifying manually that this record deletion will
not cause data loss.
Tree Inconsistencies
The verification process checks four different entity trees (hierarchical representation of entities):
l Test Plan tree
l Business Components tree
l Requirement tree
l Test Lab tree
The verification process checks that the data in the tree tables is correct.
Caution: Do not manually fix any problems related to tree data. The repair process fixes them
automatically.
Problem: The verification process checks for the following types of problems:
l Corrupted Path. This is an internal ALM field that contains a string that represents the order of
each node in the tree.
l Wrong Number of Children. This is an internal ALM field that contains the number of children for
each node in the tree.
l Orphan Records in Trees. By definition, orphan records do not have parent records. As a result,
you cannot access them through the ALM user interface.
Solution: Automatic Repair. Run the repair process to automatically fix any problems related to tree
data.
Caution: Before beginning the automatic repair, review each orphan record carefully. If the
verification process finds an orphan record, it deletes it (and all its descendants) from the tree
automatically.
Views
Database views can contain the following warning:
l "Extra Views" below
Extra Views
ALM schemas should contain only the views that are defined in the schema configuration file.
Problem: If the verification process detects extra views that were added manually to the schema, it
displays an Extra Views warning. Adding extra views on top of the schema is not supported and
could cause problems.
Note: This problem requires manual repair. The repair process cannot fix it.
Solution: Do one of the following:
l Change the Schema. If you use the view, copy it to a different schema. If you do not use the view,
delete it. Before taking either action, back up your schema and consult your database
administrator. For details, see "Changing the Database User Schema" on page 157.
l Use the Exception File. For details about the Exception file, see "Define an Exception File" on
page 51.
Note: Not recommended: Instruct the upgrade to ignore this problem.
Orphaned Entities
The verification process checks for entity data that is missing corresponding parent data. For
example, the following entities might be missing corresponding test configurations or test criteria:
l Test configuration coverage
l Criteria coverage
l Run criteria
l Runs
l Test instances
Caution: Do not manually fix any problems related to orphaned entities. The repair process
fixes them automatically.
Problem: In version-controlled projects, deleting a test configuration or test criteria did not delete
corresponding entities after checking in. This caused incorrect coverage calculation.
Solution: Automatic Repair. Run the repair process to automatically fix any problems related to
orphaned entities created by this problem.
Missing Entities
The verification process checks for data that is missing. For example, the following entities might be
missing:
l Test configurations
l Test criteria
Caution: Do not manually fix any problems related to missing entities. The repair process fixes
them automatically.
Problem: The upgrade process can detect that certain entities are missing based on information that
exists in related tables.
Solution: Automatic Repair. Run the repair process to automatically fix any problems related to
missing entities created by this problem.
Missing Lists and/or List Values
The verification process checks that all of the fields of List type are associated with a list.
Problem: If a list and/or its values are missing, the verification process generates a warning about
missing lists or missing list values.
Solution:
Run the repair process to create the missing list and/or its values.
Missing lists are re-created with the name: AUTO_GENERATED_LIST_NAME_<unique_number>
After running the repair process, do the following in Customization > Project Lists: 
l Rename any lists whose names are prefixed by AUTO_GENERATED_LIST_NAME_.
l If necessary, add any list values that are missing.
Tip: Although you can use the repair process to add these objects, we recommend that you
contact Micro Focus Support to make sure that the missing objects are not just symptoms of a
bigger problem.
Changing the Database User Schema
This section describes the problems that require manual repair (cannot be fixed automatically by the
repair process), and recommends solutions for these problems. If you encounter any of the problems
mentioned below, consult with your database administrator or contact Micro Focus Support for
further guidelines to resolve these problems before upgrading.
The stability of the new database upgrade component depends on the database user schema validity.
We recommend that you not use the Exception file to change the database user schema.
This section includes:
• Missing Database Objects 157
• Missing List Warning 157
• Sequences Warning 158
• Changed Database Objects 158
• Extra Database Objects 158
Missing Database Objects
Missing database objects can be symptoms of a bigger problem.
Problem: Missing database objects (for example, tables and indexes) can yield unexpected and
unwanted behavior.
Solution: Although you can use the repair process to add these objects, we recommend that you
contact Micro Focus Support to make sure that the missing objects are not just symptoms of a bigger
problem.
Missing List Warning
User-defined fields of List type must be associated with lists.
Problem: If a list is missing for a user-defined field, the verification process generates a Missing List
warning.
Solution: Contact Micro Focus Support for instructions on changing the data type of the user-defined
field from List to String in the SYSTEM_FIELD table.
Caution: Contact Micro Focus Support before attempting to fix the problem manually.
Sequences Warning
An internal mechanism manages IDs and other system numerators. The table SEQUENCES holds the
name of the table or other entity whose numeration is being tracked as well as its highest current
value.
Problem: If one of the records is missing in this table, or if one of the values is incorrect, the
verification process generates a Sequences warning.
Solution: The repair process fixes the problem automatically.
Caution: We strongly recommend that you not attempt to fix the problem manually.
Changed Database Objects
Any of the following cases is defined as a Changed Database Object:
l Data type of a column was changed
l Length of a column was changed
l Nullability of a column was changed
l Column is defined as identity although it should not be defined as such, or vice versa
Problem: A changed column data type can result in incorrect behavior on the server side.
Solution: To avoid this behavior, make sure that you have resolved all data type and length concerns
before beginning the upgrade.
For every changed database object that is found, do the following:
1. Create a new column with the required attributes as originally defined by the ALM server.
2. Move the data from the old column to the new one.
If you cannot move the data (for example, move strings to numeric columns, or move large data to
smaller fields), contact Micro Focus Support.
3. Remove the old column.
4. Rename the new column to the original column name.
Extra Database Objects
ALM has various customization options. One option is to add user-defined fields (UDFs). You can add
a UDF by using either the project customization user interface or through OTA (Open Test
Architecture).
Problem: Any other addition to the database user schema (for example, defining extra objects on top
of ALM schema) can result in a failure, such as the following:
l Name Conflict. If the later version happens to include a name that you added for a proprietary
database object (for example, a table, view, or column), the two names will be in conflict.
l Copy and Synchronize Failure. If the database user schema contains extra or missing database
objects, some ALM mechanisms for copying and synchronizing might fail.
l Extra Triggers. If the database contains extra triggers, some update operations might fail.
Solution:
For each extra database object that is found, perform the corresponding solution:
l Move extra columns to newly created tables.
To make sure a new table has a one-to-one relationship with the original table, define the primary
key of the new column in the new table with the value of the primary key of the original column in
the original table.
l Move extra tables to a different database user schema.
These extra tables include those tables created above. You might need to amend the proprietary
application data access of these tables. You can still access these tables from within the ALM
database connection by specifying the full name.
l Oracle
<schema name>.<table name>
l SQL Server
<database name>.td.<table name>
To be able to see these tables, you must grant the necessary permissions for the database user
schema.
l Move extra views to a different database user schema.
Like extra tables, these views can be moved to a different database user schema. In addition, you
must grant reading permissions to the newly created database user schema on the database user
schema objects.
l Remove referential integrity between customer database objects and ALM database objects.
This removal includes no data loss.
l Remove extra triggers before the upgrade, and, only if truly necessary, restore them after the
upgrade.
No data loss is involved. The upgrade process includes data upgraders that perform some data
manipulations (for example, removing duplicate values, fixing tree structures, and so on).
Your triggers will not be invoked on these update events.
As a result, you need to do the following:
a. Ask Micro Focus Support for information about the data upgrader activity.
b. Review the information about the data upgrader activity.
c. Decide on which proprietary updates you need to perform.
l Remove extra indexes.
You can log all indexes before the upgrade, and (only if necessary) restore them after the upgrade.
No data loss is involved.
l Oracle Database only: Move extra sequences to a newly created database user schema.
To access the extra sequences from the database user schema, you must grant ALM the required
permissions. When moving these sequences, set them to start with the number they reached at the
time of the move.
Send Us Feedback
Let us know how we can improve your experience with the Installation and Upgrade
Guide - Linux.
Send your email to: docteam@microfocus.com

      
      
      "
      
      
      } .  question: ${prompt}`,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})


////////////
//test
///////////





app.post('/v2', async (req, res) => {
  try {
    const data = [
      {
        name: 'ishimwe robert',
        birthdate: 'March 14, 2000',
        birthplace: 'kigali',
        occupation: 'Physicist',
        achievements: 'Developed the theory of relativity and made groundbreaking contributions to the study of quantum mechanics. Awarded the Nobel Prize in Physics in 1921.',
        deathdate: 'April 18, 1955',
        deathplace: 'Princeton, New Jersey, USA'
      }
    ]
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
      data: data
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})









app.listen(5000, () => console.log('AI server started on http://localhost:5000'))
