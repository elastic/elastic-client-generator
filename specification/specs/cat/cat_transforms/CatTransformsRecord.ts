/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

class CatTransformsRecord {
  /**
   * the id
   */
  'id'?: string
  /**
   * transform state
   * @aliases s
   */
  'state'?: string
  /**
   * checkpoint
   * @aliases c
   */
  'checkpoint'?: string
  /**
   * the number of documents read from source indices and processed
   * @aliases docp, documentsProcessed
   */
  'documents_processed'?: string
  /**
   * progress of the checkpoint
   * @aliases cp, checkpointProgress
   */
  'checkpoint_progress'?: string
  /**
   * last time transform searched for updates
   * @aliases lst, lastSearchTime
   */
  'last_search_time'?: string
  /**
   * changes last detected time
   * @aliases cldt
   */
  'changes_last_detection_time'?: string
  /**
   * transform creation time
   * @aliases ct, createTime
   */
  'create_time'?: string
  /**
   * the version of Elasticsearch when the transform was created
   * @aliases v
   */
  'version'?: string
  /**
   * source index
   * @aliases si, sourceIndex
   */
  'source_index'?: string
  /**
   * destination index
   * @aliases di, destIndex
   */
  'dest_index'?: string
  /**
   * transform pipeline
   * @aliases p
   */
  'pipeline'?: string
  /**
   * description
   * @aliases d
   */
  'description'?: string
  /**
   * batch or continuous transform
   * @aliases tt
   */
  'transform_type'?: string
  /**
   * frequency of transform
   * @aliases f
   */
  'frequency'?: string
  /**
   * max page search size
   * @aliases mpsz
   */
  'max_page_search_size'?: string
  /**
   * docs per second
   * @aliases dps
   */
  'docs_per_second'?: string
  /**
   * reason for the current state
   * @aliases r
   */
  'reason'?: string
  /**
   * total number of search phases
   * @aliases st
   */
  'search_total'?: string
  /**
   * total number of search failures
   * @aliases sf
   */
  'search_failure'?: string
  /**
   * total search time
   * @aliases stime
   */
  'search_time'?: string
  /**
   * total number of index phases done by the transform
   * @aliases it
   */
  'index_total'?: string
  /**
   * total number of index failures
   * @aliases if
   */
  'index_failure'?: string
  /**
   * total time spent indexing documents
   * @aliases itime
   */
  'index_time'?: string
  /**
   * the number of documents written to the destination index
   * @aliases doci
   */
  'documents_indexed'?: string
  /**
   * total time spent deleting documents
   * @aliases dtime
   */
  'delete_time'?: string
  /**
   * the number of documents deleted from the destination index
   * @aliases docd
   */
  'documents_deleted'?: string
  /**
   * the number of times the transform has been triggered
   * @aliases tc
   */
  'trigger_count'?: string
  /**
   * the number of pages processed
   * @aliases pp
   */
  'pages_processed'?: string
  /**
   * the total time spent processing documents
   * @aliases pt
   */
  'processing_time'?: string
  /**
   * exponential average checkpoint processing time (milliseconds)
   * @aliases cdtea, checkpointTimeExpAvg
   */
  'checkpoint_duration_time_exp_avg'?: string
  /**
   * exponential average number of documents indexed
   * @aliases idea
   */
  'indexed_documents_exp_avg'?: string
  /**
   * exponential average number of documents processed
   * @aliases pdea
   */
  'processed_documents_exp_avg'?: string
}
