-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "dept_hod_fk" FOREIGN KEY ("hod") REFERENCES "staff"("staff_no") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_dept_code_fkey" FOREIGN KEY ("dept_code") REFERENCES "department"("dept_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pre_requisite" ADD CONSTRAINT "pre_requisite_mod_code_fkey" FOREIGN KEY ("mod_code") REFERENCES "module"("mod_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pre_requisite" ADD CONSTRAINT "pre_requisite_requisite_fkey" FOREIGN KEY ("requisite") REFERENCES "module"("mod_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "module_mod_coord_fkey" FOREIGN KEY ("mod_coord") REFERENCES "staff"("staff_no") ON DELETE SET NULL ON UPDATE CASCADE;
