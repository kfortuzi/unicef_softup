ALTER TABLE jobs
ADD COLUMN textsearchable_index_col tsvector;

CREATE OR REPLACE FUNCTION jobs_trigger() RETURNS trigger AS $$
BEGIN
    NEW.textsearchable_index_col :=
        setweight(to_tsvector('simple', coalesce(NEW.title, '')), 'A') ||
        setweight(to_tsvector('simple', coalesce(NEW.description, '')), 'A') ||
        setweight(to_tsvector('simple', coalesce(NEW.company, '')), 'B') ||
        setweight(to_tsvector('simple', coalesce(NEW.address, '')), 'B') ||
        setweight(to_tsvector('simple', coalesce(NEW.location, '')), 'B') ||
        setweight(to_tsvector('simple', coalesce(NEW.experience, '')), 'B') ||
        setweight(to_tsvector('simple', coalesce(NEW.skill_lines, '')), 'C') ||
        setweight(to_tsvector('simple', coalesce(NEW.skills, '')), 'C') ||
        setweight(to_tsvector('simple', coalesce(NEW.specializations, '')), 'C') ||
        setweight(to_tsvector('simple', coalesce(NEW.basic_skills, '')), 'C') ||
        setweight(to_tsvector('simple', coalesce(NEW.computer_skills, '')), 'C') ||
        setweight(to_tsvector('simple', coalesce(NEW.education_type::text, '')), 'D') ||
        setweight(to_tsvector('simple', coalesce(NEW.foreign_language, '')), 'D');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_jobs_tsvector BEFORE INSERT OR UPDATE
ON jobs
FOR EACH ROW EXECUTE FUNCTION jobs_trigger();

CREATE INDEX textsearch_idx ON jobs USING GIN(textsearchable_index_col);
