package com.comp208.implementation.implement;

import com.comp208.mappers.UserInformationMapper;
import com.comp208.entity.UserInformation;
import com.comp208.implementation.UserInformationService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by comp208 on 2024.3.1.
 */
@Service("userInformationService")
public class UserInformationServiceImpl implements UserInformationService {
    @Resource
    private UserInformationMapper userInformationMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(UserInformation record) {
        return this.userInformationMapper.insert(record);
    }

    @Override
    public int insertSelective(UserInformation record) {
        return this.userInformationMapper.insertSelective(record);
    }

    @Override
    public UserInformation selectByPrimaryKey(Integer id) {
        return this.userInformationMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(UserInformation record) {
        return this.userInformationMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(UserInformation record) {
        return this.userInformationMapper.updateByPrimaryKey(record);
    }

    @Override
    public int selectIdByPhone(String phone) {
        try {
            return this.userInformationMapper.selectIdByPhone(phone);
        } catch (Exception e) {
            return 0;
        }
    }

    @Override
    public List<UserInformation> getAllForeach(List<Integer> list) {
        return this.userInformationMapper.getAllForeach(list);
    }
}
