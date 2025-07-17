-- AddForeignKey
ALTER TABLE "stud_mod_performance" ADD CONSTRAINT "fk_stud_mod_perf_student" FOREIGN KEY ("adm_no") REFERENCES "student"("adm_no") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stud_mod_performance" ADD CONSTRAINT "fk_stud_mod_perf_module" FOREIGN KEY ("mod_registered") REFERENCES "module"("mod_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
