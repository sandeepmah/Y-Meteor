let ErrorCodes : {
  code: number,
  message: string,
  detail: string
}[] = [];

error_code("OK", 0)
error_code("InternalError", 1)
error_code("BadValue", 2)
error_code("OBSOLETE_DuplicateKey", 3)
error_code("NoSuchKey", 4)
error_code("GraphContainsCycle", 5)
error_code("HostUnreachable", 6)
error_code("HostNotFound", 7)
error_code("UnknownError", 8)
error_code("FailedToParse", 9)
error_code("CannotMutateObject", 10)
error_code("UserNotFound", 11)
error_code("UnsupportedFormat", 12)
error_code("Unauthorized", 13)
error_code("TypeMismatch", 14)
error_code("Overflow", 15)
error_code("InvalidLength", 16)
error_code("ProtocolError", 17)
error_code("AuthenticationFailed", 18)
error_code("CannotReuseObject", 19)
error_code("IllegalOperation", 20)
error_code("EmptyArrayOperation", 21)
error_code("InvalidBSON", 22)
error_code("AlreadyInitialized", 23)
error_code("LockTimeout", 24)
error_code("RemoteValidationError", 25)
error_code("NamespaceNotFound", 26)
error_code("IndexNotFound", 27)
error_code("PathNotViable", 28)
error_code("NonExistentPath", 29)
error_code("InvalidPath", 30)
error_code("RoleNotFound", 31)
error_code("RolesNotRelated", 32)
error_code("PrivilegeNotFound", 33)
error_code("CannotBackfillArray", 34)
error_code("UserModificationFailed", 35)
error_code("RemoteChangeDetected", 36)
error_code("FileRenameFailed", 37)
error_code("FileNotOpen", 38)
error_code("FileStreamFailed", 39)
error_code("ConflictingUpdateOperators", 40)
error_code("FileAlreadyOpen", 41)
error_code("LogWriteFailed", 42)
error_code("CursorNotFound", 43)
error_code("UserDataInconsistent", 45)
error_code("LockBusy", 46)
error_code("NoMatchingDocument", 47)
error_code("NamespaceExists", 48)
error_code("InvalidRoleModification", 49)
error_code("ExceededTimeLimit", 50)
error_code("ManualInterventionRequired", 51)
error_code("DollarPrefixedFieldName", 52)
error_code("InvalidIdField", 53)
error_code("NotSingleValueField", 54)
error_code("InvalidDBRef", 55)
error_code("EmptyFieldName", 56)
error_code("DottedFieldName", 57)
error_code("RoleModificationFailed", 58)
error_code("CommandNotFound", 59)
error_code("OBSOLETE_DatabaseNotFound", 60)
error_code("ShardKeyNotFound", 61)
error_code("OplogOperationUnsupported", 62)
error_code("StaleShardVersion", 63)
error_code("WriteConcernFailed", 64)
error_code("MultipleErrorsOccurred", 65)
error_code("ImmutableField", 66)
error_code("CannotCreateIndex", 67 )
error_code("IndexAlreadyExists", 68 )
error_code("AuthSchemaIncompatible", 69)
error_code("ShardNotFound", 70)
error_code("ReplicaSetNotFound", 71)
error_code("InvalidOptions", 72)
error_code("InvalidNamespace", 73)
error_code("NodeNotFound", 74)
error_code("WriteConcernLegacyOK", 75)
error_code("NoReplicationEnabled", 76)
error_code("OperationIncomplete", 77)
error_code("CommandResultSchemaViolation", 78)
error_code("UnknownReplWriteConcern", 79)
error_code("RoleDataInconsistent", 80)
error_code("NoMatchParseContext", 81)
error_code("NoProgressMade", 82)
error_code("RemoteResultsUnavailable", 83)
error_code("DuplicateKeyValue", 84)
error_code("IndexOptionsConflict", 85 )
error_code("IndexKeySpecsConflict", 86 )
error_code("CannotSplit", 87)
error_code("SplitFailed_OBSOLETE", 88)
error_code("NetworkTimeout", 89)
error_code("CallbackCanceled", 90)
error_code("ShutdownInProgress", 91)
error_code("SecondaryAheadOfPrimary", 92)
error_code("InvalidReplicaSetConfig", 93)
error_code("NotYetInitialized", 94)
error_code("NotSecondary", 95)
error_code("OperationFailed", 96)
error_code("NoProjectionFound", 97)
error_code("DBPathInUse", 98)
error_code("UnsatisfiableWriteConcern", 100)
error_code("OutdatedClient", 101)
error_code("IncompatibleAuditMetadata", 102)
error_code("NewReplicaSetConfigurationIncompatible", 103)
error_code("NodeNotElectable", 104)
error_code("IncompatibleShardingMetadata", 105)
error_code("DistributedClockSkewed", 106)
error_code("LockFailed", 107)
error_code("InconsistentReplicaSetNames", 108)
error_code("ConfigurationInProgress", 109)
error_code("CannotInitializeNodeWithData", 110)
error_code("NotExactValueField", 111)
error_code("WriteConflict", 112)
error_code("InitialSyncFailure", 113)
error_code("InitialSyncOplogSourceMissing", 114)
error_code("CommandNotSupported", 115)
error_code("DocTooLargeForCapped", 116)
error_code("ConflictingOperationInProgress", 117)
error_code("NamespaceNotSharded", 118)
error_code("InvalidSyncSource", 119)
error_code("OplogStartMissing", 120)
// error_code("DocumentValidationFailure", 121) # Only for the document validator on collections.
error_code("OBSOLETE_ReadAfterOptimeTimeout", 122)
error_code("NotAReplicaSet", 123)
error_code("IncompatibleElectionProtocol", 124)
error_code("CommandFailed", 125)
error_code("RPCProtocolNegotiationFailed", 126)
error_code("UnrecoverableRollbackError", 127)
error_code("LockNotFound", 128)
error_code("LockStateChangeFailed", 129)
error_code("SymbolNotFound", 130)
error_code("RLPInitializationFailed", 131)
error_code("OBSOLETE_ConfigServersInconsistent", 132)
error_code("FailedToSatisfyReadPreference", 133)
error_code("ReadConcernMajorityNotAvailableYet", 134)
error_code("StaleTerm", 135)
error_code("CappedPositionLost", 136)
error_code("IncompatibleShardingConfigVersion", 137)
error_code("RemoteOplogStale", 138)
error_code("JSInterpreterFailure", 139)
error_code("InvalidSSLConfiguration", 140)
error_code("SSLHandshakeFailed", 141)
error_code("JSUncatchableError", 142)
error_code("CursorInUse", 143)
error_code("IncompatibleCatalogManager", 144)
error_code("PooledConnectionsDropped", 145)
error_code("ExceededMemoryLimit", 146)
error_code("ZLibError", 147)
error_code("ReadConcernMajorityNotEnabled", 148)
error_code("NoConfigMaster", 149)
error_code("StaleEpoch", 150)
error_code("OperationCannotBeBatched", 151)
error_code("OplogOutOfOrder", 152)
error_code("ChunkTooBig", 153)
error_code("InconsistentShardIdentity", 154)
error_code("CannotApplyOplogWhilePrimary", 155)
error_code("OBSOLETE_NeedsDocumentMove", 156)
error_code("CanRepairToDowngrade", 157)
error_code("MustUpgrade", 158)
error_code("DurationOverflow", 159)
error_code("MaxStalenessOutOfRange", 160)
error_code("IncompatibleCollationVersion", 161)
error_code("CollectionIsEmpty", 162)
error_code("ZoneStillInUse", 163)
error_code("InitialSyncActive", 164)
error_code("ViewDepthLimitExceeded", 165)
error_code("CommandNotSupportedOnView", 166)
error_code("OptionNotSupportedOnView", 167)
error_code("InvalidPipelineOperator", 168)
// error_code("CommandOnShardedViewNotSupportedOnMongod", 169, extra='ResolvedView')
error_code("TooManyMatchingDocuments", 170)
error_code("CannotIndexParallelArrays", 171)
error_code("TransportSessionClosed", 172)
error_code("TransportSessionNotFound", 173)
error_code("TransportSessionUnknown", 174)
error_code("QueryPlanKilled", 175)
error_code("FileOpenFailed", 176)
error_code("ZoneNotFound", 177)
error_code("RangeOverlapConflict", 178)
error_code("WindowsPdhError", 179)
error_code("BadPerfCounterPath", 180)
error_code("AmbiguousIndexKeyPattern", 181)
error_code("InvalidViewDefinition", 182);
error_code("ClientMetadataMissingField", 183)
error_code("ClientMetadataAppNameTooLarge", 184)
error_code("ClientMetadataDocumentTooLarge", 185)
error_code("ClientMetadataCannotBeMutated", 186)
error_code("LinearizableReadConcernError", 187)
error_code("IncompatibleServerVersion", 188)
error_code("PrimarySteppedDown", 189)
error_code("MasterSlaveConnectionFailure", 190)
error_code("OBSOLETE_BalancerLostDistributedLock", 191)
error_code("FailPointEnabled", 192)
error_code("NoShardingEnabled", 193)
error_code("BalancerInterrupted", 194)
error_code("ViewPipelineMaxSizeExceeded", 195)
error_code("InvalidIndexSpecificationOption", 197)
error_code("OBSOLETE_ReceivedOpReplyMessage", 198)
error_code("ReplicaSetMonitorRemoved", 199)
error_code("ChunkRangeCleanupPending", 200)
error_code("CannotBuildIndexKeys", 201)
error_code("NetworkInterfaceExceededTimeLimit", 202)
error_code("ShardingStateNotInitialized", 203)
error_code("TimeProofMismatch", 204)
error_code("ClusterTimeFailsRateLimiter", 205)
error_code("NoSuchSession", 206)
error_code("InvalidUUID", 207)
error_code("TooManyLocks", 208)
error_code("StaleClusterTime", 209)
error_code("CannotVerifyAndSignLogicalTime", 210)
error_code("KeyNotFound", 211)
error_code("IncompatibleRollbackAlgorithm", 212)
error_code("DuplicateSession", 213)
error_code("AuthenticationRestrictionUnmet", 214)
error_code("DatabaseDropPending", 215)
error_code("ElectionInProgress", 216)
error_code("IncompleteTransactionHistory", 217);
error_code("UpdateOperationFailed", 218)
error_code("FTDCPathNotSet", 219)
error_code("FTDCPathAlreadySet", 220)
error_code("IndexModified", 221)
error_code("CloseChangeStream", 222)
error_code("IllegalOpMsgFlag", 223)
error_code("QueryFeatureNotAllowed", 224)
error_code("TransactionTooOld", 225)
error_code("AtomicityFailure", 226)
// error_code("CannotImplicitlyCreateCollection", 227, extra="CannotImplicitlyCreateCollectionInfo");
error_code("SessionTransferIncomplete", 228)
error_code("MustDowngrade", 229)
error_code("DNSHostNotFound", 230)
error_code("DNSProtocolError", 231)
error_code("MaxSubPipelineDepthExceeded", 232)
error_code("TooManyDocumentSequences", 233)
error_code("RetryChangeStream", 234)
error_code("InternalErrorNotSupported", 235)
  // # this function or module is not available on this platform or configuration
// error_code("ForTestingErrorExtraInfo", 236, extra="ErrorExtraInfoExample")
error_code("CursorKilled", 237)
error_code("NotImplemented", 238)
error_code("SnapshotTooOld", 239)
error_code("DNSRecordTypeMismatch", 240)
error_code("ConversionFailure", 241)
error_code("CannotCreateCollection", 242)
error_code("IncompatibleWithUpgradedServer", 243)
error_code("NOT_YET_AVAILABLE_TransactionAborted", 244)
error_code("BrokenPromise", 245)
error_code("SnapshotUnavailable", 246)
error_code("ProducerConsumerQueueBatchTooLarge", 247)
error_code("ProducerConsumerQueueEndClosed", 248)
// error_code("StaleDbVersion", 249, extra="StaleDbRoutingVersion")
error_code("StaleChunkHistory", 250)
error_code("NoSuchTransaction", 251)
error_code("ReentrancyNotAllowed", 252)
error_code("FreeMonHttpInFlight", 253)
error_code("FreeMonHttpTemporaryFailure", 254)
error_code("FreeMonHttpPermanentFailure", 255)
error_code("TransactionCommitted", 256)
error_code("TransactionTooLarge", 257)
error_code("UnknownFeatureCompatibilityVersion", 258);
error_code("KeyedExecutorRetry", 259);
error_code("InvalidResumeToken", 260);
error_code("TooManyFilesOpen", 261);
error_code("FailPointSetFailed", 262)
error_code("OperationNotSupportedInTransaction", 263)
error_code("TooManyLogicalSessions", 264);
error_code("OrphanedRangeCleanUpFailed", 265);

// # Error codes 4000-8999 are reserved.

// # Non-sequential error codes (for compatibility only)
error_code("SocketException", 9001)
error_code("OBSOLETE_RecvStaleConfig", 9996)
error_code("NotMaster", 10107)
error_code("CannotGrowDocumentInCappedNamespace", 10003)
error_code("BSONObjectTooLarge", 10334)
error_code("DuplicateKey", 11000, "Can't insert a duplicate document")
error_code("InterruptedAtShutdown", 11600)
error_code("Interrupted", 11601)
error_code("InterruptedDueToStepDown", 11602)
error_code("OutOfDiskSpace", 14031 )
error_code("KeyTooLong", 17280);
error_code("BackgroundOperationInProgressForDatabase", 12586);
error_code("BackgroundOperationInProgressForNamespace", 12587);
error_code("NotMasterOrSecondary", 13436);
error_code("NotMasterNoSlaveOk", 13435);
error_code("ShardKeyTooBig", 13334);
// error_code("StaleConfig", 13388, extra="StaleConfigInfo");
error_code("DatabaseDifferCase", 13297);
error_code("OBSOLETE_PrepareConfigsFailed", 13104);

// # Group related errors into classes, can be checked against ErrorCodes::isXXXClassName methods.
// error_class("NetworkError", ["HostUnreachable", "HostNotFound", "NetworkTimeout", "SocketException"])
// error_class("Interruption", ["Interrupted",
//   "InterruptedAtShutdown",
//   "InterruptedDueToStepDown",
//   "ExceededTimeLimit",
//   "CursorKilled",
//   "LockTimeout"])
//
// # isNotMasterError() includes all codes that indicate that the node that received the request was
// # not master at some point during command processing, regardless of whether some write may have
// # happened. If you care about whether a write could have happened, check for individual codes.
// error_class("NotMasterError", [
//   "NotMaster",
//   "NotMasterNoSlaveOk",
//   "NotMasterOrSecondary",
//   "InterruptedDueToStepDown",
//   "PrimarySteppedDown",
// ])
// error_class("StaleShardVersionError",
//   ["StaleConfig", "StaleShardVersion", "StaleEpoch"])
// error_class("NeedRetargettingError",
//   ["StaleConfig", "StaleShardVersion", "StaleEpoch", "CannotImplicitlyCreateCollection"])
// error_class("WriteConcernError", ["WriteConcernFailed",
//   "WriteConcernLegacyOK",
//   "UnknownReplWriteConcern",
//   "UnsatisfiableWriteConcern"])
// error_class("ShutdownError", ["ShutdownInProgress", "InterruptedAtShutdown"])
//
// #TODO SERVER-28679 add checksum failure.
// error_class("ConnectionFatalMessageParseError", ["IllegalOpMsgFlag",
//   "TooManyDocumentSequences"])
//
// error_class("ExceededTimeLimitError", ["ExceededTimeLimit", "NetworkInterfaceExceededTimeLimit"])
//
// error_class("SnapshotError", ["SnapshotTooOld", "SnapshotUnavailable", "StaleChunkHistory"])


export default ErrorCodes;


function error_code(message: string, code: number, detail?: string) {
  ErrorCodes.push({
    code,
    message,
    detail
  })
}

