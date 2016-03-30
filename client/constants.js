/*
 * Applications.
 */

// Fetch.
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
export const FETCH_APPLICATIONS_PENDING = 'FETCH_APPLICATIONS_PENDING';
export const FETCH_APPLICATIONS_REJECTED = 'FETCH_APPLICATIONS_REJECTED';
export const FETCH_APPLICATIONS_FULFILLED = 'FETCH_APPLICATIONS_FULFILLED';

// Fetch single.
export const FETCH_APPLICATION = 'FETCH_APPLICATION';
export const FETCH_APPLICATION_PENDING = 'FETCH_APPLICATION_PENDING';
export const FETCH_APPLICATION_REJECTED = 'FETCH_APPLICATION_REJECTED';
export const FETCH_APPLICATION_FULFILLED = 'FETCH_APPLICATION_FULFILLED';

/*
 * Application Groups
 */

export const FETCH_APPLICATION_GROUPS = 'FETCH_APPLICATION_GROUPS';
export const FETCH_APPLICATION_GROUPS_PENDING = 'FETCH_APPLICATION_GROUPS_PENDING';
export const FETCH_APPLICATION_GROUPS_REJECTED = 'FETCH_APPLICATION_GROUPS_REJECTED';
export const FETCH_APPLICATION_GROUPS_FULFILLED = 'FETCH_APPLICATION_GROUPS_FULFILLED';

// Add.
export const ADD_APPLICATION_GROUP = 'ADD_APPLICATION_GROUP';
export const ADD_APPLICATION_GROUP_PENDING = 'ADD_APPLICATION_GROUP_PENDING';
export const ADD_APPLICATION_GROUP_REJECTED = 'ADD_APPLICATION_GROUP_REJECTED';
export const ADD_APPLICATION_GROUP_FULFILLED = 'ADD_APPLICATION_GROUP_FULFILLED';

// Create or edit.
export const CREATE_APPLICATION_GROUP = 'CREATE_APPLICATION_GROUP';
export const EDIT_APPLICATION_GROUP = 'EDIT_APPLICATION_GROUP';
export const CLEAR_APPLICATION_GROUP = 'CLEAR_APPLICATION_GROUP';

// Save.
export const SAVE_APPLICATION_GROUP = 'SAVE_APPLICATION_GROUP';
export const SAVE_APPLICATION_GROUP_PENDING = 'SAVE_APPLICATION_GROUP_PENDING';
export const SAVE_APPLICATION_GROUP_REJECTED = 'SAVE_APPLICATION_GROUP_REJECTED';
export const SAVE_APPLICATION_GROUP_FULFILLED = 'SAVE_APPLICATION_GROUP_FULFILLED';

// Delete.
export const REQUEST_REMOVE_APPLICATION_GROUP = 'REQUEST_REMOVE_APPLICATION_GROUP';
export const CANCEL_REMOVE_APPLICATION_GROUP = 'CANCEL_REMOVE_APPLICATION_GROUP';
export const REMOVE_APPLICATION_GROUP = 'REMOVE_APPLICATION_GROUP';
export const REMOVE_APPLICATION_GROUP_PENDING = 'REMOVE_APPLICATION_GROUP_PENDING';
export const REMOVE_APPLICATION_GROUP_REJECTED = 'REMOVE_APPLICATION_GROUP_REJECTED';
export const REMOVE_APPLICATION_GROUP_FULFILLED = 'REMOVE_APPLICATION_GROUP_FULFILLED';

/*
 * Auth.
 */

// Token.
export const LOADED_TOKEN = 'LOADED_TOKEN';
export const RECIEVED_TOKEN = 'RECIEVED_TOKEN';

// Login.
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const REDIRECT_LOGIN = 'REDIRECT_LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Logout.
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/*
 * Connections.
 */

// Fetch.
export const FETCH_CONNECTIONS = 'FETCH_CONNECTIONS';
export const FETCH_CONNECTIONS_PENDING = 'FETCH_CONNECTIONS_PENDING';
export const FETCH_CONNECTIONS_REJECTED = 'FETCH_CONNECTIONS_REJECTED';
export const FETCH_CONNECTIONS_FULFILLED = 'FETCH_CONNECTIONS_FULFILLED';

/*
 * Groups.
 */

// Fetch all.
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_PENDING = 'FETCH_GROUPS_PENDING';
export const FETCH_GROUPS_REJECTED = 'FETCH_GROUPS_REJECTED';
export const FETCH_GROUPS_FULFILLED = 'FETCH_GROUPS_FULFILLED';

// Fetch single.
export const FETCH_GROUP = 'FETCH_GROUP';
export const FETCH_GROUP_PENDING = 'FETCH_GROUP_PENDING';
export const FETCH_GROUP_REJECTED = 'FETCH_GROUP_REJECTED';
export const FETCH_GROUP_FULFILLED = 'FETCH_GROUP_FULFILLED';

// Save.
export const SAVE_GROUP = 'SAVE_GROUP';
export const SAVE_GROUP_PENDING = 'SAVE_GROUP_PENDING';
export const SAVE_GROUP_REJECTED = 'SAVE_GROUP_REJECTED';
export const SAVE_GROUP_FULFILLED = 'SAVE_GROUP_FULFILLED';

// Create or edit.
export const CREATE_GROUP = 'CREATE_GROUP';
export const EDIT_GROUP = 'EDIT_GROUP';
export const CLEAR_GROUP = 'CLEAR_GROUP';

// Delete.
export const REQUEST_DELETE_GROUP = 'REQUEST_DELETE_GROUP';
export const CANCEL_DELETE_GROUP = 'CANCEL_DELETE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const DELETE_GROUP_PENDING = 'DELETE_GROUP_PENDING';
export const DELETE_GROUP_REJECTED = 'DELETE_GROUP_REJECTED';
export const DELETE_GROUP_FULFILLED = 'DELETE_GROUP_FULFILLED';

/*
 * Group Mappings
 */

export const FETCH_GROUP_MAPPINGS = 'FETCH_GROUP_MAPPINGS';
export const FETCH_GROUP_MAPPINGS_PENDING = 'FETCH_GROUP_MAPPINGS_PENDING';
export const FETCH_GROUP_MAPPINGS_REJECTED = 'FETCH_GROUP_MAPPINGS_REJECTED';
export const FETCH_GROUP_MAPPINGS_FULFILLED = 'FETCH_GROUP_MAPPINGS_FULFILLED';

// Create or edit.
export const CREATE_GROUP_MAPPING = 'CREATE_GROUP_MAPPING';
export const EDIT_GROUP_MAPPING = 'EDIT_GROUP_MAPPING';
export const CLEAR_GROUP_MAPPING = 'CLEAR_GROUP_MAPPING';

// Save.
export const SAVE_GROUP_MAPPING = 'SAVE_GROUP_MAPPING';
export const SAVE_GROUP_MAPPING_PENDING = 'SAVE_GROUP_MAPPING_PENDING';
export const SAVE_GROUP_MAPPING_REJECTED = 'SAVE_GROUP_MAPPING_REJECTED';
export const SAVE_GROUP_MAPPING_FULFILLED = 'SAVE_GROUP_MAPPING_FULFILLED';

// Delete.
export const REQUEST_DELETE_GROUP_MAPPING = 'REQUEST_DELETE_GROUP_MAPPING';
export const CANCEL_DELETE_GROUP_MAPPING = 'CANCEL_DELETE_GROUP_MAPPING';
export const DELETE_GROUP_MAPPING = 'DELETE_GROUP_MAPPING';
export const DELETE_GROUP_MAPPING_PENDING = 'DELETE_GROUP_MAPPING_PENDING';
export const DELETE_GROUP_MAPPING_REJECTED = 'DELETE_GROUP_MAPPING_REJECTED';
export const DELETE_GROUP_MAPPING_FULFILLED = 'DELETE_GROUP_MAPPING_FULFILLED';

/*
 * Group Members
 */

// Add.
export const ADD_GROUP_MEMBERS = 'ADD_GROUP_MEMBERS';
export const ADD_GROUP_MEMBERS_PENDING = 'ADD_GROUP_MEMBERS_PENDING';
export const ADD_GROUP_MEMBERS_REJECTED = 'ADD_GROUP_MEMBERS_REJECTED';
export const ADD_GROUP_MEMBERS_FULFILLED = 'ADD_GROUP_MEMBERS_FULFILLED';

// Fetch.
export const FETCH_GROUP_MEMBERS = 'FETCH_GROUP_MEMBERS';
export const FETCH_GROUP_MEMBERS_PENDING = 'FETCH_GROUP_MEMBERS_PENDING';
export const FETCH_GROUP_MEMBERS_REJECTED = 'FETCH_GROUP_MEMBERS_REJECTED';
export const FETCH_GROUP_MEMBERS_FULFILLED = 'FETCH_GROUP_MEMBERS_FULFILLED';

// Remove member.
export const REQUEST_REMOVE_GROUP_MEMBER = 'REQUEST_REMOVE_GROUP_MEMBER';
export const CANCEL_REMOVE_GROUP_MEMBER = 'CANCEL_REMOVE_GROUP_MEMBER';
export const REMOVE_GROUP_MEMBER = 'REMOVE_GROUP_MEMBER';
export const REMOVE_GROUP_MEMBER_PENDING = 'REMOVE_GROUP_MEMBER_PENDING';
export const REMOVE_GROUP_MEMBER_REJECTED = 'REMOVE_GROUP_MEMBER_REJECTED';
export const REMOVE_GROUP_MEMBER_FULFILLED = 'REMOVE_GROUP_MEMBER_FULFILLED';

/*
 * Nested groups.
 */

// Add.
export const ADD_GROUP_NESTED = 'ADD_GROUP_NESTED';
export const ADD_GROUP_NESTED_PENDING = 'ADD_GROUP_NESTED_PENDING';
export const ADD_GROUP_NESTED_REJECTED = 'ADD_GROUP_NESTED_REJECTED';
export const ADD_GROUP_NESTED_FULFILLED = 'ADD_GROUP_NESTED_FULFILLED';

// Fetch.
export const FETCH_GROUP_NESTED = 'FETCH_GROUP_NESTED';
export const FETCH_GROUP_NESTED_PENDING = 'FETCH_GROUP_NESTED_PENDING';
export const FETCH_GROUP_NESTED_REJECTED = 'FETCH_GROUP_NESTED_REJECTED';
export const FETCH_GROUP_NESTED_FULFILLED = 'FETCH_GROUP_NESTED_FULFILLED';

// Remove.
export const REQUEST_REMOVE_GROUP_NESTED = 'REQUEST_REMOVE_GROUP_NESTED';
export const CANCEL_REMOVE_GROUP_NESTED = 'CANCEL_REMOVE_GROUP_NESTED';
export const REMOVE_GROUP_NESTED = 'REMOVE_GROUP_NESTED';
export const REMOVE_GROUP_NESTED_PENDING = 'REMOVE_GROUP_NESTED_PENDING';
export const REMOVE_GROUP_NESTED_REJECTED = 'REMOVE_GROUP_NESTED_REJECTED';
export const REMOVE_GROUP_NESTED_FULFILLED = 'REMOVE_GROUP_NESTED_FULFILLED';

/*
 * Group Picker.
 */

export const CONFIRM_GROUP_PICKER = 'CONFIRM_GROUP_PICKER';
export const CANCEL_GROUP_PICKER = 'CANCEL_GROUP_PICKER';

// Open.
export const OPEN_GROUP_PICKER = 'OPEN_GROUP_PICKER';

// Load.
export const LOAD_GROUP_PICKER = 'LOAD_GROUP_PICKER';
export const LOAD_GROUP_PICKER_PENDING = 'LOAD_GROUP_PICKER_PENDING';
export const LOAD_GROUP_PICKER_REJECTED = 'LOAD_GROUP_PICKER_REJECTED';
export const LOAD_GROUP_PICKER_FULFILLED = 'LOAD_GROUP_PICKER_FULFILLED';

/*
 * Logs.
 */

export const CLEAR_LOG = 'CLEAR_LOG';

// Fetch all.
export const FETCH_LOGS = 'FETCH_LOGS';
export const FETCH_LOGS_PENDING = 'FETCH_LOGS_PENDING';
export const FETCH_LOGS_REJECTED = 'FETCH_LOGS_REJECTED';
export const FETCH_LOGS_FULFILLED = 'FETCH_LOGS_FULFILLED';

// Fetch single.
export const FETCH_LOG = 'FETCH_LOG';
export const FETCH_LOG_PENDING = 'FETCH_LOG_PENDING';
export const FETCH_LOG_REJECTED = 'FETCH_LOG_REJECTED';
export const FETCH_LOG_FULFILLED = 'FETCH_LOG_FULFILLED';

/*
 * Permissions
 */

// Fetch.
export const FETCH_PERMISSIONS = 'FETCH_PERMISSIONS';
export const FETCH_PERMISSIONS_PENDING = 'FETCH_PERMISSIONS_PENDING';
export const FETCH_PERMISSIONS_REJECTED = 'FETCH_PERMISSIONS_REJECTED';
export const FETCH_PERMISSIONS_FULFILLED = 'FETCH_PERMISSIONS_FULFILLED';

// Save.
export const SAVE_PERMISSION = 'SAVE_PERMISSION';
export const SAVE_PERMISSION_PENDING = 'SAVE_PERMISSION_PENDING';
export const SAVE_PERMISSION_REJECTED = 'SAVE_PERMISSION_REJECTED';
export const SAVE_PERMISSION_FULFILLED = 'SAVE_PERMISSION_FULFILLED';

// Create or Edit.
export const CREATE_PERMISSION = 'CREATE_PERMISSION';
export const EDIT_PERMISSION = 'SAVE_PERMISSION';
export const CLEAR_PERMISSION = 'CLEAR_PERMISSION';

// Delete.
export const REQUEST_DELETE_PERMISSION = 'REQUEST_DELETE_PERMISSION';
export const CANCEL_DELETE_PERMISSION = 'CANCEL_DELETE_PERMISSION';
export const DELETE_PERMISSION = 'DELETE_PERMISSION';
export const DELETE_PERMISSION_PENDING = 'DELETE_PERMISSION_PENDING';
export const DELETE_PERMISSION_REJECTED = 'DELETE_PERMISSION_REJECTED';
export const DELETE_PERMISSION_FULFILLED = 'DELETE_PERMISSION_FULFILLED';

/*
 * Roles.
 */

// Fetch.
export const FETCH_ROLES = 'FETCH_ROLES';
export const FETCH_ROLES_PENDING = 'FETCH_ROLES_PENDING';
export const FETCH_ROLES_REJECTED = 'FETCH_ROLES_REJECTED';
export const FETCH_ROLES_FULFILLED = 'FETCH_ROLES_FULFILLED';

// Save.
export const SAVE_ROLE = 'SAVE_ROLE';
export const SAVE_ROLE_PENDING = 'SAVE_ROLE_PENDING';
export const SAVE_ROLE_REJECTED = 'SAVE_ROLE_REJECTED';
export const SAVE_ROLE_FULFILLED = 'SAVE_ROLE_FULFILLED';

// Create or Edit.
export const CREATE_ROLE = 'CREATE_ROLE';
export const EDIT_ROLE = 'SAVE_ROLE';
export const CLEAR_ROLE = 'CLEAR_ROLE';

// Delete.
export const REQUEST_DELETE_ROLE = 'REQUEST_DELETE_ROLE';
export const CANCEL_DELETE_ROLE = 'CANCEL_DELETE_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const DELETE_ROLE_PENDING = 'DELETE_ROLE_PENDING';
export const DELETE_ROLE_REJECTED = 'DELETE_ROLE_REJECTED';
export const DELETE_ROLE_FULFILLED = 'DELETE_ROLE_FULFILLED';

/*
 * Users.
 */

// Fetch all.
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';

// Fetch single.
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

// Fetch user authorization.
export const FETCH_USER_AUTHORIZATION = 'FETCH_USER_AUTHORIZATION';
export const FETCH_USER_AUTHORIZATION_PENDING = 'FETCH_USER_AUTHORIZATION_PENDING';
export const FETCH_USER_AUTHORIZATION_REJECTED = 'FETCH_USER_AUTHORIZATION_REJECTED';
export const FETCH_USER_AUTHORIZATION_FULFILLED = 'FETCH_USER_AUTHORIZATION_FULFILLED';

// Fetch logs.
export const FETCH_USER_LOGS = 'FETCH_USER_LOGS';
export const FETCH_USER_LOGS_PENDING = 'FETCH_USER_LOGS_PENDING';
export const FETCH_USER_LOGS_REJECTED = 'FETCH_USER_LOGS_REJECTED';
export const FETCH_USER_LOGS_FULFILLED = 'FETCH_USER_LOGS_FULFILLED';

// Fetch devices.
export const FETCH_USER_DEVICES = 'FETCH_USER_DEVICES';
export const FETCH_USER_DEVICES_PENDING = 'FETCH_USER_DEVICES_PENDING';
export const FETCH_USER_DEVICES_REJECTED = 'FETCH_USER_DEVICES_REJECTED';
export const FETCH_USER_DEVICES_FULFILLED = 'FETCH_USER_DEVICES_FULFILLED';

// Fetch groups.
export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';
export const FETCH_USER_GROUPS_PENDING = 'FETCH_USER_GROUPS_PENDING';
export const FETCH_USER_GROUPS_REJECTED = 'FETCH_USER_GROUPS_REJECTED';
export const FETCH_USER_GROUPS_FULFILLED = 'FETCH_USER_GROUPS_FULFILLED';

// Remove MFA.
export const REQUEST_REMOVE_MULTIFACTOR = 'REQUEST_REMOVE_MULTIFACTOR';
export const CANCEL_REMOVE_MULTIFACTOR = 'CANCEL_REMOVE_MULTIFACTOR';
export const REMOVE_MULTIFACTOR = 'REMOVE_MULTIFACTOR';
export const REMOVE_MULTIFACTOR_PENDING = 'REMOVE_MULTIFACTOR_PENDING';
export const REMOVE_MULTIFACTOR_REJECTED = 'REMOVE_MULTIFACTOR_REJECTED';
export const REMOVE_MULTIFACTOR_FULFILLED = 'REMOVE_MULTIFACTOR_FULFILLED';

// Block user.
export const REQUEST_BLOCK_USER = 'REQUEST_BLOCK_USER';
export const CANCEL_BLOCK_USER = 'CANCEL_BLOCK_USER';
export const BLOCK_USER = 'BLOCK_USER';
export const BLOCK_USER_PENDING = 'BLOCK_USER_PENDING';
export const BLOCK_USER_REJECTED = 'BLOCK_USER_REJECTED';
export const BLOCK_USER_FULFILLED = 'BLOCK_USER_FULFILLED';

// Unblock user.
export const REQUEST_UNBLOCK_USER = 'REQUEST_UNBLOCK_USER';
export const CANCEL_UNBLOCK_USER = 'CANCEL_UNBLOCK_USER';
export const UNBLOCK_USER = 'UNBLOCK_USER';
export const UNBLOCK_USER_PENDING = 'UNBLOCK_USER_PENDING';
export const UNBLOCK_USER_REJECTED = 'UNBLOCK_USER_REJECTED';
export const UNBLOCK_USER_FULFILLED = 'UNBLOCK_USER_FULFILLED';

/*
 * User Picker.
 */

export const CONFIRM_USER_PICKER = 'CONFIRM_USER_PICKER';
export const CANCEL_USER_PICKER = 'CANCEL_USER_PICKER';

// Open.
export const OPEN_USER_PICKER = 'OPEN_USER_PICKER';

// Search.
export const SEARCH_USER_PICKER = 'SEARCH_USER_PICKER';
export const SEARCH_USER_PICKER_PENDING = 'SEARCH_USER_PICKER_PENDING';
export const SEARCH_USER_PICKER_REJECTED = 'SEARCH_USER_PICKER_REJECTED';
export const SEARCH_USER_PICKER_FULFILLED = 'SEARCH_USER_PICKER_FULFILLED';

// Select.
export const SELECT_USER = 'SELECT_USER';
export const UNSELECT_USER = 'UNSELECT_USER';
