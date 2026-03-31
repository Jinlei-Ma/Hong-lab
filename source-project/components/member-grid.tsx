import type { Member, TeamGroup } from "@/lib/site-data";

type MemberGridProps = {
  facultyGroup: TeamGroup;
  studentGroups: TeamGroup[];
  collaboratorGroup: TeamGroup;
};

function getToneClass(groupId: string) {
  if (groupId === "faculty") return "tone-faculty";
  if (groupId === "phd-students") return "tone-phd";
  if (groupId === "master-students") return "tone-master";
  if (groupId === "visiting-students") return "tone-visiting";
  if (groupId === "alumni") return "tone-alumni";
  return "tone-collaborator";
}

function MemberCard({
  member,
  toneClass,
  groupId
}: {
  member: Member;
  toneClass: string;
  groupId: string;
}) {
  return (
    <article className={`miniMemberCard ${toneClass}`}>
      {member.photoUrl ? (
        <img
          alt={`${member.nameZh}照片`}
          className="miniMemberPhotoImage"
          src={member.photoUrl}
        />
      ) : (
        <div className="miniMemberPhoto">照片</div>
      )}
      <div className="miniMemberContent">
        <h4>{member.nameZh}</h4>
        {member.schoolZh ? <p>学校：{member.schoolZh}</p> : null}
        {member.academyZh ? <p>学院：{member.academyZh}</p> : null}
        {member.educationZh ? <p>学历：{member.educationZh}</p> : null}
        {member.focusZh ? (
          <p>{groupId === "alumni" ? `去向：${member.focusZh}` : `专长：${member.focusZh}`}</p>
        ) : null}
        {member.email ? <p>邮箱：{member.email}</p> : null}
      </div>
    </article>
  );
}

export function MemberGrid({
  facultyGroup,
  studentGroups,
  collaboratorGroup
}: MemberGridProps) {
  return (
    <div className="memberPageSections">
      <section className="memberPageSection">
        <div className="memberPageSectionHeader">
          <h2>{facultyGroup.titleZh}</h2>
        </div>
        <div className="miniMemberGrid">
          {facultyGroup.members.map((member) => (
            <MemberCard
              key={`${facultyGroup.id}-${member.nameZh}`}
              member={member}
              groupId={facultyGroup.id}
              toneClass={getToneClass(facultyGroup.id)}
            />
          ))}
        </div>
      </section>

      <section className="memberPageSection">
        <div className="memberPageSectionHeader">
          <h2>学生团队</h2>
        </div>

        <div className="studentGroupStack">
          {studentGroups.map((group) => (
            <section className="studentSubgroup" key={group.id}>
              <h3>{group.titleZh}</h3>
              <div className="miniMemberGrid">
                {group.members.map((member) => (
                  <MemberCard
                    key={`${group.id}-${member.nameZh}`}
                    member={member}
                    groupId={group.id}
                    toneClass={getToneClass(group.id)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="memberPageSection">
        <div className="memberPageSectionHeader">
          <h2>{collaboratorGroup.titleZh}</h2>
        </div>
        <div className="miniMemberGrid">
          {collaboratorGroup.members.map((member) => (
            <MemberCard
              key={`${collaboratorGroup.id}-${member.nameZh}`}
              member={member}
              groupId={collaboratorGroup.id}
              toneClass={getToneClass(collaboratorGroup.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
