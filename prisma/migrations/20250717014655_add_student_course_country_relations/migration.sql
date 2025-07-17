-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "fk_student_course" FOREIGN KEY ("crse_code") REFERENCES "course"("crse_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "fk_student_country" FOREIGN KEY ("nationality") REFERENCES "country"("country_name") ON DELETE NO ACTION ON UPDATE NO ACTION;
