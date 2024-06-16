import { useEffect, useRef, useState } from 'react';
import HomeHeaderContent from '../components/HomeHeaderContent';
import Team from '../components/Team/Team';
import CustomHeader from '../components/UI/CustomHeader';
import LoadingIndicator from '../components/UI/LoadingIndicator/LoadingIndicator';
import Error from '../components/Error';
import { TMember } from '../models/team';
import { fetchTeam } from '../utils/http';

const MEMBERS_PER_PAGE = 8;

const HomePage = () => {
  const [team, setTeam] = useState<TMember[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const pages = useRef(0);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchTeam(page, MEMBERS_PER_PAGE);
        pages.current = response.total_pages;
        setTeam(prev => {
          return [...prev, ...response.data]
        });
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, [page])

  const fetchMembersHandler = () => {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <CustomHeader>
        <HomeHeaderContent />
      </CustomHeader>
      <main>
        <div className="container">
          {loading && !error && <LoadingIndicator />}
          {!loading && error && <Error/>}
          {!loading && !error && team.length > 0 && (
            <Team
              data={team}
              onFetchMembers={fetchMembersHandler}
              buttonDisabled={pages.current === page} />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;