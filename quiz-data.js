/**
 * Data Analytics & SQL Institutional Assessment — Question Bank
 * Migrated from Code.gs (Google Apps Script) — now a plain static asset.
 * Loaded directly by index.html via <script src="quiz-data.js"></script>.
 */
const QUIZ_DATA = [
  // --- MODULE: ENTERPRISE DATA ARCHITECTURES ---
  {
    "id": 1,
    "category": "Enterprise Data Architectures",
    "question": "Which of the following correctly describes the primary distinction between Operational (OLTP) and Analytical (OLAP) database workloads?",
    "options": [
      "OLTP systems prioritize high concurrency, low-latency writes, and ACID compliance, whereas OLAP systems aggregate multi-source historical data to support business intelligence.",
      "OLTP systems run on Schema-on-Read object storage, whereas OLAP systems store unvalidated JSON document trees.",
      "OLAP databases process single-record transactional updates faster than OLTP databases.",
      "OLTP databases replace relational tables with Kimball-style star schemas for executive reporting."
    ],
    "answer": 0,
    "explanation": "OLTP systems focus on day-to-day operational transactions requiring high concurrency, low latency, and ACID compliance. OLAP systems aggregate multi-source historical data across long time horizons for BI without burdening production operational databases."
  },
  {
    "id": 2,
    "category": "Enterprise Data Architectures",
    "question": "What is the key structural distinction between a Data Warehouse and a Data Lake regarding schema enforcement?",
    "options": [
      "Data Warehouses enforce Schema-on-Read, whereas Data Lakes enforce Schema-on-Write.",
      "Data Warehouses strictly enforce a predefined Schema-on-Write during ETL ingestion, whereas Data Lakes accept multi-format raw files using Schema-on-Read.",
      "Data Lakes require upfront relational normalization before ingestion, while Data Warehouses accept raw video and PDF files.",
      "Neither architecture uses schemas; both store unindexed key-value pairs."
    ],
    "answer": 1,
    "explanation": "Data Warehouses enforce a Schema-on-Write model where predefined star or snowflake schemas are required before ETL ingestion. Data Lakes accept structured, semi-structured, and unstructured raw files using Schema-on-Read."
  },
  {
    "id": 3,
    "category": "Enterprise Data Architectures",
    "question": "An engineering team needs to model highly dynamic, nested document trees (JSON/BSON) without enforcing a fixed table schema. Which database type is best suited for this operational requirement?",
    "options": [
      "Wide-Column Store (e.g., Apache Cassandra)",
      "Graph Database (e.g., Neo4j)",
      "Document Database (e.g., MongoDB)",
      "Relational Database (e.g., MySQL)"
    ],
    "answer": 2,
    "explanation": "Document databases store semi-structured data as JSON/BSON document trees, allowing nested structures and dynamic fields per document. Key-value stores hold key pairs, wide-column stores hold dynamic column sets, and graph databases represent entities as nodes and edges."
  },
  {
    "id": 4,
    "category": "Enterprise Data Architectures",
    "question": "Why do modern Data Lakes decouple cloud object storage (e.g., AWS S3, Google Cloud Storage) from compute query engines (e.g., AWS Athena, Presto)?",
    "options": [
      "To force all raw files into a rigid 3rd Normal Form schema before ingestion.",
      "To allow raw, multi-format files to be stored cost-effectively while specialized query engines query the storage layer directly as needed.",
      "To prevent data scientists and machine learning engineers from accessing raw files.",
      "To enforce real-time row-level ACID transactions for retail checkout operations."
    ],
    "answer": 1,
    "explanation": "Data lakes separate storage from compute so scalable cloud object storage layers hold raw files cost-effectively, while specialized query engines query raw storage directly using SQL or distributed execution frameworks."
  },
  {
    "id": 5,
    "category": "Enterprise Data Architectures",
    "question": "Which persona is the PRIMARY intended target user of a Data Lake according to comparative enterprise architecture frameworks?",
    "options": [
      "Non-technical executive decision-makers relying on sub-second operational dashboards.",
      "Data Engineers, Data Scientists, and Analysts exploring raw datasets or executing ad-hoc discovery queries.",
      "Application developers processing real-time single-record financial transactions.",
      "Auditors who require strictly aggregated Gold-layer star schemas."
    ],
    "answer": 1,
    "explanation": "Data lakes serve data engineers, data scientists, and analysts exploring unexpected patterns or executing ad-hoc discovery queries over historical datasets. Executive BI users typically rely on data warehouses or Gold-layer data marts."
  },

  // --- MODULE: SQL QUERYING & DATA INTEGRATION ---
  {
    "id": 6,
    "category": "SQL Querying & Data Integration",
    "question": "In SQL querying, what is the fundamental functional difference between the WHERE clause and the HAVING clause?",
    "options": [
      "WHERE filters aggregated result groups after GROUP BY, while HAVING filters individual rows before grouping.",
      "WHERE filters individual record rows BEFORE categorical grouping occurs, whereas HAVING applies conditional filters to aggregated groups formed by GROUP BY.",
      "WHERE can only be used with pattern matching LIKE, whereas HAVING is restricted to subqueries.",
      "WHERE requires a JOIN clause, whereas HAVING can only filter primary key constraints."
    ],
    "answer": 1,
    "explanation": "WHERE filters individual row records before grouping, whereas HAVING places conditions on aggregated result groups formed by GROUP BY (e.g., HAVING COUNT(username) > 1)."
  },
  {
    "id": 7,
    "category": "SQL Querying & Data Integration",
    "question": "Consider a LEFT JOIN between 'users' and 'posts'. What happens if you place a secondary condition WHERE posts.title LIKE '%SQL%' instead of placing it directly in the JOIN ON clause?",
    "options": [
      "It preserves all left-table user records and assigns NULL to non-matching post titles.",
      "It converts the LEFT JOIN into an effective INNER JOIN by filtering out NULL rows where posts do not match.",
      "It converts the LEFT JOIN into a FULL OUTER JOIN.",
      "It generates a syntax error because WHERE cannot reference joined table columns."
    ],
    "answer": 1,
    "explanation": "Placing a secondary filter in the WHERE clause converts a LEFT JOIN into an effective INNER JOIN by filtering out NULL rows. Placing the condition directly in the JOIN ON clause preserves all left-table records while attaching matching right-table attributes."
  },
  {
    "id": 8,
    "category": "SQL Querying & Data Integration",
    "question": "When creating a composite index across multiple columns (e.g., CREATE INDEX idx ON users(birthday, active)), how should column ordering be structured for optimal execution?",
    "options": [
      "Place low-cardinality boolean attributes (like 'active') first.",
      "Place high-cardinality attributes with many distinct values (like 'birthday') first.",
      "Order columns alphabetically regardless of data cardinality.",
      "Composite indexes automatically ignore column order during execution."
    ],
    "answer": 1,
    "explanation": "In composite indexes spanning multiple columns, column ordering is critical: placing high-cardinality attributes first (e.g., birthday before low-cardinality active) is significantly more efficient."
  },
  {
    "id": 9,
    "category": "SQL Querying & Data Integration",
    "question": "In SQL pattern matching using the LIKE operator, what is the specific difference between wildcard characters '_' (underscore) and '%' (percent sign)?",
    "options": [
      "'_' matches an arbitrary string of characters, while '%' matches exactly one character.",
      "'_' matches exactly one single character, while '%' matches an arbitrary sequence of zero or more characters.",
      "'_' is case-sensitive, while '%' is case-insensitive.",
      "'_' matches numeric digits only, while '%' matches letters only."
    ],
    "answer": 1,
    "explanation": "The wildcard character '_' matches exactly one single character, while '%' matches an arbitrary sequence of characters (e.g., WHERE username LIKE '_e%' finds names with 'e' as the second character)."
  },
  {
    "id": 10,
    "category": "SQL Querying & Data Integration",
    "question": "What is the key difference between the UNION and UNION ALL set operators in SQL?",
    "options": [
      "UNION retains duplicate rows, while UNION ALL eliminates duplicates.",
      "UNION combines query result sets while eliminating duplicate rows; UNION ALL retains all rows including duplicates.",
      "UNION requires different column counts, while UNION ALL requires identical schemas.",
      "UNION works only on DDL commands, whereas UNION ALL works only on DML commands."
    ],
    "answer": 1,
    "explanation": "The UNION operator combines result sets from multiple SELECT statements while eliminating duplicate rows; UNION ALL retains all rows including duplicates. Both require identical column counts and compatible data types."
  },

  // --- MODULE: MEDALLION ARCHITECTURE & DATA GOVERNANCE ---
  {
    "id": 11,
    "category": "Medallion Architecture & Data Governance",
    "question": "Which characteristics define the Bronze layer in a Medallion Architecture?",
    "options": [
      "It enforces 3rd Normal Form (3NF) and deduplicates customer records into golden records.",
      "It serves as an append-only landing zone that preserves raw source data structure without business transformations or strict schema validation.",
      "It holds Kimball dimensional star schemas optimized for executive sub-second BI reporting.",
      "It is directly queried by non-technical business analysts for quarterly financial reporting."
    ],
    "answer": 1,
    "explanation": "The Bronze layer is an append-only raw landing zone that preserves raw source structure without altering records or enforcing strict schema validation. It is restricted to data engineers and operations teams."
  },
  {
    "id": 12,
    "category": "Medallion Architecture & Data Governance",
    "question": "What are the core engineering operations and data modeling paradigms used in the Silver layer?",
    "options": [
      "Pre-calculating materialized aggregations for C-suite executive dashboards.",
      "Cleansing, deduplicating, schema enforcement, flattening structs, and modeling data into 3rd Normal Form (3NF) or Data Vault structures.",
      "Storing immutable raw text files with operational metadata without validation.",
      "Enforcing PII regulatory compliance masks for public consumption."
    ],
    "answer": 1,
    "explanation": "The Silver layer cleanses, validates, deduplicates, flattens structs, and normalizes data into 3rd Normal Form (3NF) or Data Vault patterns to produce an enterprise view."
  },
  {
    "id": 13,
    "category": "Medallion Architecture & Data Governance",
    "question": "How is data organized in the Gold layer of a Medallion Architecture to support high-performance business intelligence?",
    "options": [
      "As append-only raw JSON logs with minimal schema checking.",
      "In 3rd Normal Form to maximize write performance and prevent data duplication.",
      "In Kimball-style star schemas (de-normalized fact and dimension tables) or data marts with pre-calculated materialized aggregations.",
      "As unstructured key-value caches using Schema-on-Read."
    ],
    "answer": 2,
    "explanation": "The Gold layer organizes conformed Silver data into Kimball-style star schemas (fact and dimension tables) or data marts with materialized aggregations to minimize query latency for BI tools."
  },
  {
    "id": 14,
    "category": "Medallion Architecture & Data Governance",
    "question": "Which data ingestion strategy provides the lowest latency (sub-second / real-time) but incurs the highest operational compute cost?",
    "options": [
      "Batch Ingestion with Manual Partitions",
      "Triggered Incremental Ingestion",
      "Continuous Incremental Ingestion",
      "Scheduled Weekly Partition Overwrites"
    ],
    "answer": 2,
    "explanation": "Continuous Incremental Ingestion uses continuous streaming frameworks (e.g., Spark Structured Streaming) to deliver real-time/sub-second latency, incurring the highest compute cost."
  },
  {
    "id": 15,
    "category": "Medallion Architecture & Data Governance",
    "question": "Which dimension of Data Quality assesses whether datasets arrive on schedule according to Service Level Agreements (SLAs)?",
    "options": [
      "Validity",
      "Uniqueness",
      "Timeliness / Freshness",
      "Consistency"
    ],
    "answer": 2,
    "explanation": "Timeliness / Freshness assesses whether datasets arrive on schedule according to SLAs and remain current enough to support time-sensitive business processes."
  },

  // --- MODULE: DATA VISUALIZATION BEST PRACTICES ---
  {
    "id": 16,
    "category": "Data Visualization Best Practices",
    "question": "What is the foundational rule of data visualization that should govern chart selection?",
    "options": [
      "Form Follows Function — chart selection must be governed by the specific analytical question and mathematical properties of the data.",
      "Visual Novelty First — always select exotic chart types like stream graphs to engage audiences.",
      "Aesthetics Over Clarity — prioritize vibrant color palettes over axis labeling.",
      "Maximum Data Density — pack as many variables and overlapping text lines into one chart as possible."
    ],
    "answer": 0,
    "explanation": "The core rule of data visualization is 'Form Follows Function' — chart type selection must be governed by the specific analytical question and mathematical properties of the data rather than aesthetic novelty."
  },
  {
    "id": 17,
    "category": "Data Visualization Best Practices",
    "question": "When visualizing time-series developments, when is a Column Chart preferred over a Line Chart or Area Chart?",
    "options": [
      "When tracking continuous high-frequency data over decades with thousands of points.",
      "When showing discrete, fewer points in time (such as annual counts over 5 years or quarterly revenue).",
      "When showing continuous energy mix splits across solar, wind, gas, and coal over decades.",
      "When displaying 30 overlapping category lines on a single axis."
    ],
    "answer": 1,
    "explanation": "Column charts are best suited for discrete, fewer points in time (e.g., annual counts over 5 years or quarterly revenue figures). Line charts are the standard for continuous time series, and Area charts show changing sub-category contributions over time."
  },
  {
    "id": 18,
    "category": "Data Visualization Best Practices",
    "question": "Why are Bar and Column charts considered visually superior to Pie and Donut charts for comparing part-to-whole categorical shares when subtle differences exist?",
    "options": [
      "Pie charts cannot display percentages.",
      "Human visual perception struggles to accurately evaluate angle differences, whereas linear axes in bar charts make subtle variances (e.g., 3%) easily detectable.",
      "Bar charts do not support categorical data types.",
      "Pie charts require higher GPU compute power to render in web browsers."
    ],
    "answer": 1,
    "explanation": "Human visual perception struggles to accurately evaluate angle differences in circular charts. Linear bar axes allow small variances (e.g., a 3% difference across election shares) to be detected effortlessly."
  },
  {
    "id": 19,
    "category": "Data Visualization Best Practices",
    "question": "Why is a Horizontal Bar Chart advantageous for screen-responsive mobile dashboard layouts compared to a vertical column chart?",
    "options": [
      "Horizontal bar charts remove the need for data labels.",
      "Horizontal bar charts expand vertically via natural page scrolling without compressing or tilting long categorical labels.",
      "Vertical column charts cannot render on mobile screen aspect ratios.",
      "Horizontal bar charts automatically convert data into a Kimball star schema."
    ],
    "answer": 1,
    "explanation": "Horizontal bar charts offer ample space for long categorical text labels and are inherently safer for mobile responsive layouts because they expand vertically via natural page scrolling without compressing labels."
  },
  {
    "id": 20,
    "category": "Data Visualization Best Practices",
    "question": "Which of the following represents a critical visual presentation pitfall that distorts viewer perception in bar charts?",
    "options": [
      "Using horizontal bars for long categorical text labels.",
      "Truncating the Y-axis baseline on a bar chart instead of starting at zero.",
      "Adding a descriptive chart title and clear axis unit labels.",
      "Sorting bar categories in descending magnitude order."
    ],
    "answer": 1,
    "explanation": "Truncating Y-axes on bar charts distorts visual proportions and misleads viewers regarding relative magnitudes. Bar charts must start at zero baseline to maintain accurate visual length relationships."
  },

  // --- MODULE: SQL PRACTICE — SCHEMA, DML & JOINS (from class exercises) ---
  {
    "id": 21,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "A teacher creates: CREATE INDEX idx_recruiter_loc ON recruiters (city, active); Why is 'city' listed before 'active'?",
    "options": [
      "city has fewer distinct values, so it should always be listed first.",
      "city has far more distinct (high-cardinality) values than active, so placing it first lets the index narrow down rows much faster.",
      "Alphabetical column order determines index performance.",
      "active must always be the last column in any index regardless of cardinality."
    ],
    "answer": 1,
    "explanation": "city has far more distinct values (high cardinality) than active, which only ever has 2 values. Putting the high-cardinality column first lets the index narrow down rows much faster."
  },
  {
    "id": 22,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "A query filters with: WHERE stated_choice_field LIKE '%m'. Which values will this pattern match?",
    "options": [
      "Any value containing the letter 'm' anywhere in the string.",
      "Any value that starts with 'm'.",
      "Any value that ends with the letter 'm'.",
      "Only values that are exactly the single character 'm'."
    ],
    "answer": 2,
    "explanation": "LIKE '%m' matches the end of the string, not 'contains m'. Only values ending in 'm' (such as 'stem') are returned."
  },
  {
    "id": 23,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "Before running: UPDATE recommender_v2_feedback_response SET followup_consent = 0 WHERE feedback_id = '...'; why is the WHERE clause critical here?",
    "options": [
      "WHERE only affects query performance, not correctness.",
      "Without WHERE, only the very first row in the table would be updated.",
      "Without WHERE, every single row in the table would be updated — a classic beginner mistake.",
      "WHERE is optional syntax with no functional effect on UPDATE statements."
    ],
    "answer": 2,
    "explanation": "Omitting WHERE on an UPDATE applies the SET clause to every row in the table. Always confirm the WHERE condition (ideally test it first as a SELECT) before running an UPDATE or DELETE."
  },
  {
    "id": 24,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "A DELETE uses: WHERE surprise_program_text IS NULL AND missing_program_text IS NULL. Why must IS NULL be used instead of = NULL?",
    "options": [
      "= NULL and IS NULL are interchangeable in standard SQL.",
      "In SQL, NULL represents an unknown value, so a comparison with = never evaluates to true; IS NULL is the correct operator to test for NULL.",
      "= NULL executes faster than IS NULL on indexed columns.",
      "IS NULL only works with numeric data types, not text."
    ],
    "answer": 1,
    "explanation": "NULL means 'unknown,' so any equality comparison (= NULL) is also unknown, never true — the row is silently skipped. IS NULL / IS NOT NULL are the only correct ways to test for NULL."
  },
  {
    "id": 25,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "A query joins university and university_program, groups by university, then filters with HAVING COUNT(up.id) > 25. Why can't this filter go in a WHERE clause instead?",
    "options": [
      "WHERE cannot reference columns from a joined table.",
      "WHERE executes before GROUP BY produces the aggregated COUNT, so the aggregate value doesn't exist yet at that stage.",
      "HAVING and WHERE always produce identical results, so it's just a style choice.",
      "COUNT() is not permitted inside a HAVING clause."
    ],
    "answer": 1,
    "explanation": "WHERE filters rows before grouping happens, so COUNT(up.id) doesn't exist yet when WHERE runs. HAVING filters after GROUP BY, when the aggregate is available — of the 28 universities with programs, only 3 had more than 25 programs."
  },
  {
    "id": 26,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "An INNER JOIN between university and university_program returns 300 rows covering 28 of 29 universities. The Philippine Military Academy is missing entirely. Why?",
    "options": [
      "INNER JOIN randomly excludes a small percentage of rows for performance.",
      "The Philippine Military Academy has zero matching rows in university_program, so INNER JOIN silently drops it from the result.",
      "There is a syntax error in the university table definition.",
      "INNER JOIN only supports a maximum of 28 output rows."
    ],
    "answer": 1,
    "explanation": "INNER JOIN only returns rows where both tables have a match. Since the Philippine Military Academy has no rows in university_program, it has nothing to match against and is silently excluded."
  },
  {
    "id": 27,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "A LEFT JOIN places an extra condition inside the ON clause: ON up.university_id = u.university_id AND up.program_major LIKE '%Engineering%'. What happens to universities with no Engineering programs?",
    "options": [
      "They are excluded from the result set entirely, just like an INNER JOIN.",
      "They still appear in the results, with NULL shown for program_major.",
      "The query throws a syntax error because LIKE cannot be used in an ON clause.",
      "All their programs are merged into a single summary row."
    ],
    "answer": 1,
    "explanation": "Placing the extra filter in the ON clause (not WHERE) keeps every university in the result — even ones with no Engineering programs — showing NULL instead of dropping them. The Philippine Military Academy appears with a NULL program_major."
  },
  {
    "id": 28,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "If a student instead moves the Q27 condition into a WHERE clause after the LEFT JOIN — WHERE up.program_major LIKE '%Engineering%' — what happens?",
    "options": [
      "Nothing changes; the results stay identical to the ON-clause version.",
      "It silently behaves like an INNER JOIN, because WHERE runs after the join and discards the NULL rows produced for non-matches.",
      "It converts the query into a CROSS JOIN.",
      "It causes a database error since WHERE cannot reference a LEFT JOIN's right-table columns."
    ],
    "answer": 1,
    "explanation": "This is one of the most common LEFT JOIN mistakes: WHERE executes after the join and throws away NULL rows, so universities with no matching programs disappear entirely — defeating the purpose of the LEFT JOIN."
  },
  {
    "id": 29,
    "category": "SQL Practice: Schema, DML & Joins",
    "question": "Which syntax correctly creates an auto-incrementing integer primary key in SQLite?",
    "options": [
      "id INT AUTO_INCREMENT PRIMARY KEY",
      "id SERIAL PRIMARY KEY",
      "id INTEGER PRIMARY KEY AUTOINCREMENT",
      "id INT IDENTITY(1,1)"
    ],
    "answer": 2,
    "explanation": "SQLite uses INTEGER PRIMARY KEY AUTOINCREMENT. MySQL uses AUTO_INCREMENT, and PostgreSQL uses SERIAL — the exact syntax varies by database engine, which is worth testing across tools."
  },

  // --- MODULE: DATA PIPELINE NAMING STANDARDS (from class exercise) ---
  {
    "id": 30,
    "category": "Data Pipeline Naming Standards",
    "question": "Which of the following correctly follows the Bronze layer naming pattern (bronze_<data_source>_<table_name>_<frequency>)?",
    "options": [
      "silver_evt_guest_tracker_d",
      "bronze_gsheet_guest_tracker_d",
      "gold_pty_dashboard_monthly_visitors_d",
      "dim_pty_university_d"
    ],
    "answer": 1,
    "explanation": "bronze_gsheet_guest_tracker_d follows bronze_<data_source>_<table_name>_<frequency>, identifying a raw daily extraction from a Google Sheet source."
  },
  {
    "id": 31,
    "category": "Data Pipeline Naming Standards",
    "question": "What defines valid content for a Bronze layer table?",
    "options": [
      "Rows already filtered to match business logic.",
      "Deduplicated and cleaned records only.",
      "A raw, unmodified copy of the source table — every row and column pulled by the extraction query, with no filtering.",
      "Pre-aggregated totals ready for a dashboard tile."
    ],
    "answer": 2,
    "explanation": "A Bronze table must always contain every row and column pulled by the extraction query. If rows were filtered out, it is no longer considered Bronze."
  },
  {
    "id": 32,
    "category": "Data Pipeline Naming Standards",
    "question": "When a Bronze table becomes a Silver table, what typically happens to its name?",
    "options": [
      "It gets renamed with a new department-specific suffix.",
      "The same table name is carried forward with a silver_ prefix — no suffix added.",
      "It is merged with every other Silver table into a single combined file.",
      "The name is discarded and replaced with a random ID."
    ],
    "answer": 1,
    "explanation": "One Silver table maps to one Bronze table, carrying the same name forward. Renaming mid-pipeline breaks downstream Gold-layer joins."
  },
  {
    "id": 33,
    "category": "Data Pipeline Naming Standards",
    "question": "When should a dim_ prefixed table be created in this pipeline?",
    "options": [
      "Whenever any table needs to be archived as a Parquet file.",
      "When a shared, cleaned reference table (e.g., a university list with type and tuition) will be joined by more than one Gold table.",
      "Only for the single largest Bronze table in the pipeline.",
      "Whenever a table needs a same-day backup."
    ],
    "answer": 1,
    "explanation": "dim_ tables are built once and reused whenever two or more analytical topics need the same clean reference data — for example, both an Affordability Gap chart and a Commute Burden chart needing the same university dimension."
  },
  {
    "id": 34,
    "category": "Data Pipeline Naming Standards",
    "question": "What is a defining property of a Gold layer table?",
    "options": [
      "It contains raw, unfiltered source data exactly as extracted.",
      "It's a final, analysis-ready table built by joining/aggregating Silver tables, and should map to exactly one chart or dashboard tile.",
      "It always duplicates the Bronze table's structure column-for-column.",
      "It can never be exported to Parquet for handoff."
    ],
    "answer": 1,
    "explanation": "Gold tables are the final, analysis-ready output of the pipeline, purpose-built to answer one specific stakeholder question and typically feeding exactly one chart or dashboard tile."
  },
  {
    "id": 35,
    "category": "Data Pipeline Naming Standards",
    "question": "Per the project brief, what is the recommended limit on the number of Gold tables in a pipeline?",
    "options": [
      "Under 5 total Gold tables.",
      "Exactly 1 Gold table per data source.",
      "No limit — as many as the dashboard needs.",
      "Under 100 Gold tables."
    ],
    "answer": 0,
    "explanation": "The project brief recommends keeping total Gold tables under 5, which forces each one to stay focused on a single, well-defined stakeholder question."
  },
  {
    "id": 36,
    "category": "Data Pipeline Naming Standards",
    "question": "A backup table is named gold_pty_dashboard_monthly_visitors_d_20260915. What does the date suffix represent, and why this specific format?",
    "options": [
      "The file size in bytes, used to track compression over time.",
      "The run/backup date in YYYYMMDD format, so that backups sort chronologically when listed.",
      "A randomly generated version ID; the exact format doesn't matter.",
      "The date the table is scheduled to be permanently deleted."
    ],
    "answer": 1,
    "explanation": "Backups use the actual run date as YYYYMMDD specifically so that when file names are sorted alphabetically, they also sort in true chronological order."
  },
  {
    "id": 37,
    "category": "Data Pipeline Naming Standards",
    "question": "Which frequency code should be used for a table that is refreshed once per month?",
    "options": [
      "_d",
      "_h",
      "_m",
      "_w"
    ],
    "answer": 2,
    "explanation": "The standard frequency codes are _d (daily), _m (monthly), and _h (hourly). A monthly refresh uses _m."
  },
  {
    "id": 38,
    "category": "Data Pipeline Naming Standards",
    "question": "A Parquet file bronze_csv_guest_tracker_d.parquet is created for cold storage alongside its SQLite counterpart. What rule governs the relationship between the two?",
    "options": [
      "The Parquet file can safely contain a filtered subset of rows for performance.",
      "It must match its SQLite counterpart row-for-row, and both must be regenerated together in the same run.",
      "The Parquet version should always contain more columns than the SQLite version.",
      "The Parquet file replaces the need for a SQLite Bronze table entirely."
    ],
    "answer": 1,
    "explanation": "Cold-storage Parquet files must mirror their SQLite counterpart exactly, row-for-row. Both are regenerated together in the same run so the two never drift out of sync."
  }
];
