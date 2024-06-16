import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemberContent from '../components/MemberPageContent/MemberContent';
import MemberHeaderContent from '../components/MemberPageContent/MemberHeaderContent';
import LoadingIndicator from '../components/UI/LoadingIndicator/LoadingIndicator';
import CustomHeader from '../components/UI/CustomHeader';
import Error from '../components/Error';
import { fetchMember } from '../utils/http';
import { TMember } from '../models/team';

const MemberPage = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState<TMember>({
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchMember(memberId ?? '1');
        setMember({
          id: response.data.id,
          email: response.data.email,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          avatar: response.data.avatar
        })
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, [memberId]);

  return (
    <>
      {member && !error && !loading && (
        <CustomHeader>
          <MemberHeaderContent member={member} />
        </CustomHeader>
      )}
      <main>
        <div className="container">
          {loading && !error && <LoadingIndicator />}
          {!loading && error && <Error/>}
          {member && !error && !loading && <MemberContent member={member} />}
        </div>
      </main>
    </>
  );
};

export default MemberPage;
