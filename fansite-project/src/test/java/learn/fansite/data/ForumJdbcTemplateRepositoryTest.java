package learn.fansite.data;

import learn.fansite.models.Forum;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ForumJdbcTemplateRepositoryTest {

    private final int MISSING_ID = 99;
    private final int NEXT_ID = 3;

    @Autowired
    ForumJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setUp(){knownGoodState.set();}

    @Test
    void shouldFindAll(){
        List<Forum> forumList = repository.findAll();
        assertNotNull(forumList);
        assertEquals(2, forumList.size());
    }

    @Test
    void shouldFindById(){
        Forum actual = repository.findById(1);
        assertNotNull(actual);
        assertEquals("user 1", actual.getForumName());
        assertEquals("post 1", actual.getTitle());
    }

    @Test
    void shouldNotFindByMissingId(){
        Forum actual = repository.findById(MISSING_ID);
        assertNull(actual);
    }

    @Test
    void shouldAdd(){
        Forum arg = makeForum();
        Forum actual = repository.add(arg);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getForumId());
    }

    @Test
    void shouldUpdate(){
        Forum forum = makeForum();
        forum.setForumId(1);
        assertTrue(repository.update(forum));
        forum.setForumId(MISSING_ID);
        assertFalse(repository.update(forum));
    }

    @Test
    void shouldDelete(){
        assertTrue(repository.deleteById(2));
        assertFalse(repository.deleteById(MISSING_ID));
    }

    Forum makeForum(){
        Forum forum = new Forum();
        forum.setForumName("name99");
        forum.setTitle("title99");
        forum.setPostContent("post-content-99");
        forum.setPostDate(LocalDate.now());

        return forum;
    }

}