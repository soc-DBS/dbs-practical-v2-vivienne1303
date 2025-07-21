-- DropForeignKey
ALTER TABLE "module" DROP CONSTRAINT "module_mod_coord_fkey";

-- DropForeignKey
ALTER TABLE "pre_requisite" DROP CONSTRAINT "pre_requisite_mod_code_fkey";

-- DropForeignKey
ALTER TABLE "pre_requisite" DROP CONSTRAINT "pre_requisite_requisite_fkey";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_dept_code_fkey";

-- AlterTable
ALTER TABLE "stud_mod_performance" ALTER COLUMN "mark" DROP NOT NULL,
ALTER COLUMN "grade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "mobile_phone" DROP NOT NULL,
ALTER COLUMN "home_phone" DROP NOT NULL;

-- RenameForeignKey
ALTER TABLE "stud_mod_performance" RENAME CONSTRAINT "fk_stud_mod_perf_module" TO "stud_mod_performance_mod_registered_fkey";

-- RenameForeignKey
ALTER TABLE "stud_mod_performance" RENAME CONSTRAINT "fk_stud_mod_perf_student" TO "stud_mod_performance_adm_no_fkey";

-- RenameForeignKey
ALTER TABLE "student" RENAME CONSTRAINT "fk_student_country" TO "student_nationality_fk";

-- RenameForeignKey
ALTER TABLE "student" RENAME CONSTRAINT "fk_student_course" TO "student_crse_code_fk";

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_offered_by_fk" FOREIGN KEY ("offered_by") REFERENCES "department"("dept_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "mod_mod_coord_fk" FOREIGN KEY ("mod_coord") REFERENCES "staff"("staff_no") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pre_requisite" ADD CONSTRAINT "pre_requisite_mod_code_fk" FOREIGN KEY ("mod_code") REFERENCES "module"("mod_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pre_requisite" ADD CONSTRAINT "pre_requisite_requisite_fk" FOREIGN KEY ("requisite") REFERENCES "module"("mod_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_dept_code_fk" FOREIGN KEY ("dept_code") REFERENCES "department"("dept_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
