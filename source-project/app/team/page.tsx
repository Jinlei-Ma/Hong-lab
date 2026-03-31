import { MemberGrid } from "@/components/member-grid";
import {
  collaboratorTeam,
  facultyTeam,
  studentTeamGroups
} from "@/lib/site-data";

export default function TeamPage() {
  return (
    <main className="teamSimplePage">
      <div className="teamWideFrame teamSimpleFrame">
        <header className="teamSimpleHeader">
          <h1>研究团队</h1>
          <p>
            本团队长期致力于城市数字化转型、可持续治理、气候韧性等核心议题。现有教授/
            副教授 5 名，博士研究生 6 名，硕士研究生 42 名，访问学生与研究助理若干，并与
            清华大学、河北工业大学等团队持续开展合作。
          </p>
        </header>

        <MemberGrid
          collaboratorGroup={collaboratorTeam}
          facultyGroup={facultyTeam}
          studentGroups={studentTeamGroups}
        />
      </div>
    </main>
  );
}
